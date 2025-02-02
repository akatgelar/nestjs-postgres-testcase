import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDtoParameters } from '../interface/page-meta-dto-parameters.interface';

export class PageMetaDto {
  @ApiProperty()
  readonly page: number | undefined;

  @ApiProperty()
  readonly per_page: number | undefined;

  @ApiProperty()
  readonly total_data: number | undefined;

  @ApiProperty()
  readonly total_page: number | undefined;

  // @ApiProperty()
  // readonly hasPreviousPage: boolean;

  // @ApiProperty()
  // readonly hasNextPage: boolean;

  constructor({ pageOptionsDto, itemCount }: PageMetaDtoParameters) {
    this.page = pageOptionsDto.page;
    this.per_page = pageOptionsDto.per_page;
    this.total_data = itemCount;
    this.total_page = Math.ceil(this.total_data / (this.per_page ?? 10));
    // this.hasPreviousPage = this.page > 1;
    // this.hasNextPage = this.page < this.pageCount;
  }
}
