import { IsOptional, IsString, IsUrl, MinLength } from 'class-validator';

export class CreateProfileDto {
  @IsOptional()
  @IsString()
  @MinLength(10, { message: 'Bio must be at least 10 characters long' })
  bio?: string;

  @IsOptional()
  @IsString()
  @IsUrl({}, { message: 'Social link must be a valid URL' })
  socialLink?: string;
}
