/* eslint-disable @typescript-eslint/no-array-constructor */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GiftDto } from './dto/gift.dto';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';
import { Gift } from './entities/gift.entity';
import { NullableType } from '../../common/type/nullable.type';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { PageMetaDto } from 'src/common/dto/page-meta.dto';

@Injectable()
export class GiftService {
  constructor(
    @InjectRepository(Gift) private giftRepository: Repository<Gift>,
  ) {}

  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<GiftDto>> {
    const queryBuilder = this.giftRepository.createQueryBuilder('gift');
    // console.log(pageOptionsDto);
    queryBuilder
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.per_page)
      .orderBy('gift.' + pageOptionsDto.sort_column, pageOptionsDto.sort);
    console.log(queryBuilder.getQuery());

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();
    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }

  findOne(id: number): Promise<NullableType<Gift>> {
    return this.giftRepository.findOneBy({ id });
  }

  async create(createGiftDto: CreateGiftDto): Promise<Gift> {
    const gift: Gift = new Gift();
    gift.name = createGiftDto.name;
    gift.description = createGiftDto.description;
    gift.price = createGiftDto.price;
    gift.stock = createGiftDto.stock;
    gift.count_rating = createGiftDto.count_rating;
    gift.count_review = createGiftDto.count_review;
    return await this.giftRepository.save(gift);
  }

  async update(id: number, updateGiftDto: UpdateGiftDto): Promise<Gift> {
    const gift: Gift = new Gift();
    gift.id = id;
    gift.name = updateGiftDto.name;
    gift.description = updateGiftDto.description;
    gift.price = updateGiftDto.price;
    gift.stock = updateGiftDto.stock;
    gift.count_rating = updateGiftDto.count_rating;
    gift.count_review = updateGiftDto.count_review;
    return await this.giftRepository.save(gift);
  }

  async remove(id: number): Promise<void> {
    await this.giftRepository.delete(id);
  }
}
