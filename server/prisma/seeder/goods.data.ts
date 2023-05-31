import { Goods } from '@prisma/client';

export interface IGoods extends Pick<Goods, 'shopId' | 'name' | 'img' | 'price' | 'id'> {}

export const goods: IGoods[] = [
  {
    id: 1,
    shopId: 1,
    name: 'Big Mac',
    price: 1.29,
    img: 'uploads/images/goods/Bigmac.png',
  },
  {
    id: 2,
    shopId: 1,
    name: 'Hamburger',
    price: 1.09,
    img: 'uploads/images/goods/Hamburger.png',
  },
  {
    id: 3,
    shopId: 1,
    name: 'Cheeseburger',
    price: 1.59,
    img: 'uploads/images/goods/Cheeseburger.png',
  },
  {
    id: 4,
    shopId: 1,
    name: 'Quarter Pounder®* with Cheese',
    price: 1.44,
    img: 'uploads/images/goods/QuarterPounderwithCheese.png',
  },
  {
    id: 5,
    shopId: 1,
    name: 'Double Quarter Pounder®* with Cheese',
    price: 1.85,
    img: 'uploads/images/goods/DoubleQuarterPounderwithCheese.png',
  },
  {
    id: 6,
    shopId: 1,
    name: 'Quarter Pounder®* with Cheese Deluxe',
    price: 1.99,
    img: 'uploads/images/goods/QuarterPounderCheeseDeluxe.png',
  },
  {
    id: 7,
    shopId: 1,
    name: 'McDouble®',
    price: 1.39,
    img: 'uploads/images/goods/McDouble.png',
  },
  {
    id: 8,
    shopId: 1,
    name: 'Quarter Pounder®* with Cheese Bacon',
    price: 1.79,
    img: 'uploads/images/goods/QuarterPounderCheeseBacon.png',
  },
  {
    id: 9,
    shopId: 1,
    name: 'Double Cheeseburger',
    price: 1.89,
    img: 'uploads/images/goods/DoubleCheeseburger.png',
  },
  {
    id: 10,
    shopId: 2,
    name: 'Bucket Duo Sharp',
    price: 1.39,
    img: 'uploads/images/goods/BucketDuoSharp.png',
  },
  {
    id: 11,
    shopId: 2,
    name: 'Twister Junior Special',
    price: 1.19,
    img: 'uploads/images/goods/TwisterJuniorSpecial.png',
  },
  {
    id: 12,
    shopId: 3,
    name: 'Oleato™ Iced Shaken',
    price: 1.99,
    img: 'uploads/images/goods/OleatoIcedShaken.png',
  },
  {
    id: 13,
    shopId: 3,
    name: 'Oleato™ Caffé Latte',
    price: 1.75,
    img: 'uploads/images/goods/OleatoCaffeLatte.png',
  },
];
