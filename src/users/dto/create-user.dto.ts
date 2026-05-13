import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3, { message: 'First name must be at least 3 characters long.' })
  firstName!: string;

  @IsString()
  @IsEmail({}, { message: 'Email must be a valid email address.' })
  email!: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
