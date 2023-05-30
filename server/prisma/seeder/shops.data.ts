import { Shop } from '@prisma/client';

export interface IShop extends Pick<Shop, 'name' | 'img' | 'id'> {}

export const shops: IShop[] = [
  {
    id: 1,
    name: "McDonald's",
    img: 'uploads/images/shops/McDonald_s.logo.svg',
  },
  {
    id: 2,
    name: 'KFC',
    img: 'uploads/images/shops/KFC-logo.svg',
  },
  {
    id: 3,
    name: 'Starbucks',
    img: 'uploads/images/shops/Starbucks_Coffee_Logo.svg',
  },
];
