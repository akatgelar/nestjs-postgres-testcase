import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';

export enum SortColumn {
  id = 'id',
  name = 'name',
  price = 'price',
  stock = 'stock',
  count_rating = 'count_rating',
  count_review = 'count_review',
  created_at = 'created_at',
}

export enum SortValue {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class PageOptionsDto {
  @ApiPropertyOptional({ enum: SortColumn, default: SortColumn.id })
  @Type(() => String)
  @IsOptional()
  readonly sort_column?: SortColumn = SortColumn.id;

  @ApiPropertyOptional({ enum: SortValue, default: SortValue.ASC })
  @IsEnum(SortValue)
  @IsOptional()
  readonly sort?: SortValue = SortValue.ASC;

  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page?: number | undefined = 1;

  @ApiPropertyOptional({
    minimum: 1,
    maximum: 50,
    default: 10,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  readonly per_page?: number | undefined = 10;

  get skip(): number {
    return ((this.page ?? 1) - 1) * (this.per_page ?? 10);
  }
}
