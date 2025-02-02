/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGiftDto {
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
