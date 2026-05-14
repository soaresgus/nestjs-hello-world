import { IsString, MinLength } from 'class-validator';

export class CreateTagDto {
  @IsString()
  @MinLength(3, { message: 'Tag name must be at least 3 characters long' })
  name!: string;
}
