import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { GiftService } from './gift.service';
import { GiftDto } from './dto/gift.dto';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';
import { Gift } from './entities/gift.entity';
import { AuthGuard } from '@nestjs/passport';
import { NullableType } from 'src/common/type/nullable.type';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { RatingGiftDto } from './dto/rating-gift.dto';

@Controller('gift')
@UseInterceptors(ClassSerializerInterceptor)
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  findAll(@Query() pageOptionsDto: PageOptionsDto): Promise<PageDto<GiftDto>> {
    return this.giftService.findAll(pageOptionsDto);
  }

  @Get(':id')
  // @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string): Promise<NullableType<Gift>> {
    return this.giftService.findOne(+id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createGiftDto: CreateGiftDto) {
    return this.giftService.create(createGiftDto);
  }

  @Post(':id/redeem')
  @UseGuards(AuthGuard('jwt'))
  createRedeem(@Param('id') id: string) {
    return this.giftService.createRedeem(+id);
  }

  @Post(':id/rating')
  @UseGuards(AuthGuard('jwt'))
  createRating(@Param('id') id: string, @Body() ratingGiftDto: RatingGiftDto) {
    return this.giftService.createRating(+id, ratingGiftDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateGiftDto: UpdateGiftDto) {
    return this.giftService.update(+id, updateGiftDto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  updateItem(@Param('id') id: string, @Body() updateGiftDto: UpdateGiftDto) {
    return this.giftService.update(+id, updateGiftDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.giftService.remove(+id);
  }
}
