import { IsArray, IsInt, Min } from 'class-validator';

export class LinkTagsDto {
  @IsArray()
  tagIds!: number[];

  @IsInt()
  @Min(1)
  postId!: number;
}
