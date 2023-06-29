import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public description: string;

  @IsNotEmpty()
  public dicount: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  public price: number;
}
