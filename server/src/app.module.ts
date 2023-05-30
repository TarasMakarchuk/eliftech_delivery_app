import { Module } from '@nestjs/common';
import { GoodsModule } from './goods/goods.module';
import { ConfigModule } from '@nestjs/config';
import { ShopModule } from './shop/shop.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { OrderModule } from './order/order.module';
import { path } from 'app-root-path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/uploads',
    }),
    GoodsModule,
    ShopModule,
    OrderModule,
  ],
})
export class AppModule {}
