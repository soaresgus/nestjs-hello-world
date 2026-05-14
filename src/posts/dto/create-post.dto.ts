import { IsArray, IsOptional, IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MinLength(5, { message: 'Title must be at least 5 characters long' })
  title!: string;

  @IsString()
  @MinLength(5, { message: 'Content must be at least 5 characters long' })
  content!: string;

  @IsArray()
  @IsOptional()
  tagIds?: number[] = [];
}
