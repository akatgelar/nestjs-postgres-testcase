import { Module } from '@nestjs/common';
import { GiftService } from './gift.service';
import { GiftController } from './gift.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gift } from './entities/gift.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gift])],
  controllers: [GiftController],
  providers: [GiftService],
})
export class GiftModule {}
