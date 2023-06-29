import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  public title: string;

  @IsOptional()
  public description: string;

  @IsOptional()
  public dicount: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public price: number;
}
