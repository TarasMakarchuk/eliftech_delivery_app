import { Shop } from '@prisma/client';

export interface IShop extends Pick<Shop, 'name' | 'img' | 'id' | 'address' | 'icon'> {}

export const shops: IShop[] = [
  {
    id: 1,
    name: "McDonald's",
    img: 'uploads/images/shops/McDonald_s-icon.svg',
    address: 'вулиця Смілянська, 31, Черкаси, Черкаська область, 18000',
    icon: 'uploads/images/shops/McDonald_s-icon.svg',
  },
  {
    id: 2,
    name: 'KFC',
    img: 'uploads/images/shops/KFC-logo.svg',
    address: 'бульвар Шевченка, 385, Черкаси, Черкаська область, 18000',
    icon: 'uploads/images/shops/KFC-icon.svg',
  },
  {
    id: 3,
    name: 'Starbucks',
    img: 'uploads/images/shops/Starbucks_Coffee_Logo.svg',
    address: 'вулиця Героїв Дніпра, 1, Черкаси, Черкаська область, 18000',
    icon: 'uploads/images/shops/Starbucks-icon.svg',
  },
];
