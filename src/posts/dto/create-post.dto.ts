import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'My First Post',
    required: true,
  })
  @IsString()
  @MinLength(5, { message: 'Title must be at least 5 characters long' })
  title!: string;

  @ApiProperty({
    description: 'The content of the post',
    example: 'This is the content of my first post.',
    required: true,
  })
  @IsString()
  @MinLength(5, { message: 'Content must be at least 5 characters long' })
  content!: string;
}
