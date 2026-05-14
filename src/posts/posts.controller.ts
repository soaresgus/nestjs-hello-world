import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import type { ActiveUserData } from 'src/auth/interfaces/active-user.interface';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
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

  @Post()
  @ApiOperation({
    summary: 'Create a new post for a authenticated user',
    description: 'Creates a new post associated with a authenticated user.',
  })
  async create(
    @Body() createPostDto: CreatePostDto,
    @GetUser() user: ActiveUserData,
  ) {
    return await this.postsService.create(user.sub, createPostDto);
  }
}
