import { PrismaClient } from '@prisma/client';
import { IShop, shops } from './shops.data';
import { goods, IGoods } from './goods.data';
import { IOrder, orders } from './orders.data';

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    shops.map(async (shop: IShop) => {
      await prisma.shop.create({ data: shop });
    }),
  );
  await Promise.all(
    goods.map(async (item: IGoods) => {
      await prisma.goods.create({ data: item });
    }),
  );
  await Promise.all(
    orders.map(async (order: IOrder) => {
      await prisma.order.create({ data: order });
    }),
  );

  console.log('DB was seeded successfully...');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
