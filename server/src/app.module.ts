import { Module } from '@nestjs/common';
import { GoodsModule } from './goods/goods.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), GoodsModule],
})
export class AppModule {}
