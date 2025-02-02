/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty } from 'class-validator';

export class RatingGiftDto {
  @IsNotEmpty()
  rating: number;
}
