import { Module } from '@nestjs/common';
import { GoodsModule } from './goods/goods.module';
import { ConfigModule } from '@nestjs/config';
import { ShopModule } from './shop/shop.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ConfigModule.forRoot(), GoodsModule, ShopModule, OrderModule],
})
export class AppModule {}
