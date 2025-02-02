/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateGiftDto } from './create-gift.dto';

export class UpdateGiftDto extends PartialType(CreateGiftDto) {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  stock: number;

  count_rating: number;

  count_review: number;
}
