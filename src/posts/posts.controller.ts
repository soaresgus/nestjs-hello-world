import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all posts',
    description: 'Returns a list of all posts in the system.',
  })
  async findAll() {
    return await this.postsService.findAll();
  }

  @Get(':userId')
  @ApiOperation({
    summary: 'Get posts by user ID',
    description: 'Returns a list of posts created by a specific user.',
  })
  async findByUserId(@Param('userId') userId: string) {
    return await this.postsService.findByUserId(+userId);
  }

  @Post(':userId')
  @ApiOperation({
    summary: 'Create a new post for a user',
    description: 'Creates a new post associated with a specific user.',
  })
  async create(
    @Param('userId') userId: string,
    @Body() createPostDto: CreatePostDto,
  ) {
    return await this.postsService.create(+userId, createPostDto);
  }
}
