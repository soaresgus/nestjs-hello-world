import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Tag } from './entities/tag.entity';
import { CreateTagDto } from './dto/create-tag.dto';
import { NotFoundException } from '@nestjs/common';
import { Post } from 'src/posts/entities/post.entity';
import { LinkTagsDto } from './dto/link-tags.dto';

export class TagsService {
  constructor(
    @InjectRepository(Tag) private readonly tagsRepository: Repository<Tag>,
  ) {}

  async findAll(): Promise<Tag[]> {
    return this.tagsRepository.find();
  }

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    const tag = this.tagsRepository.create(createTagDto);
    return this.tagsRepository.save(tag);
  }

  async linkTagsToPost(linkTagsDto: LinkTagsDto): Promise<Tag[]> {
    const { tagIds, postId } = linkTagsDto;

    const post = await this.tagsRepository.manager.findOne(Post, {
      where: { id: postId },
      relations: ['tags'],
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${postId} not found`);
    }

    const tags = await this.tagsRepository.find({ where: { id: In(tagIds) } });

    if (tags.length !== tagIds.length) {
      const foundTagIds = tags.map((tag) => tag.id);
      const missingTagIds = tagIds.filter((id) => !foundTagIds.includes(id));
      throw new NotFoundException(
        `Tags with IDs ${missingTagIds.join(', ')} not found`,
      );
    }

    post.tags = [...post.tags, ...tags];
    await this.tagsRepository.manager.save(post);
    return post.tags;
  }
}
