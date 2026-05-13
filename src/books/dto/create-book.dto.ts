import { IsInt, IsString, Min, MinLength } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(3)
  readonly title!: string;

  @IsString()
  readonly author!: string;

  @IsInt()
  @Min(1)
  readonly pages!: number;
}
