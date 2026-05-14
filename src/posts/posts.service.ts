import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find({
      relations: ['user', 'tags'],
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findByUserId(userId: number): Promise<Post[]> {
    return await this.postRepository.find({
      where: { user: { id: userId } },
      relations: ['user', 'tags'],
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async create(userId: number, createPostDto: CreatePostDto): Promise<Post> {
    const newPost = this.postRepository.create({
      ...createPostDto,
      user: { id: userId },
    });

    return await this.postRepository.save(newPost);
  }
}
