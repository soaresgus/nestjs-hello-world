import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { TagsService } from './tags.service';
import { LinkTagsDto } from './dto/link-tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async findAll() {
    return this.tagsService.findAll();
  }

  @Post()
  async create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Post('link')
  async linkTagsToPost(@Body() linkTagsDto: LinkTagsDto) {
    return this.tagsService.linkTagsToPost(linkTagsDto);
  }
}
