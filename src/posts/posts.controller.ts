import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll() {
    return await this.postsService.findAll();
  }

  @Get(':userId')
  async findByUserId(@Param('userId') userId: string) {
    return await this.postsService.findByUserId(+userId);
  }

  @Post(':userId')
  async create(
    @Param('userId') userId: string,
    @Body() createPostDto: CreatePostDto,
  ) {
    return await this.postsService.create(+userId, createPostDto);
  }
}
