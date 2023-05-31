import { Order } from '@prisma/client';

export interface IOrder
  extends Pick<
    Order,
    'fullName' | 'email' | 'phone' | 'shippingAddress' | 'total' | 'items' | 'createdAt' | 'id'
  > {}

export const orders: IOrder[] = [
  {
    id: 1,
    fullName: 'John Doe',
    email: 'john@gmail.com',
    phone: '+9999999999999',
    shippingAddress: 'Lviv city, Shevchenko str, build. 4, apt. 8',
    total: 4.32,
    items:
      '[{"id":1,"shopId":1,"name":"Big Mac","price":1.29,"quantity":1},{"id":3,"shopId":1,"name":"Cheeseburger",' +
      '"price":1.59,"quantity":1},{"id":4,"shopId":1,"name":"Quarter Pounder®* with Cheese",' +
      '"price":1.44,"quantity":1}' +
      ']',
    createdAt: new Date('2023-05-30 08:55:02.673'),
  },
  {
    id: 2,
    fullName: 'John Doe',
    email: 'john@gmail.com',
    phone: '+9999999999999',
    shippingAddress: 'Lviv city, Shevchenko str, build. 4, apt. 8',
    total: 2.38,
    items:
      '[{"id":1,"shopId":1,"name":"Big Mac","price":1.29,"quantity":1},' +
      '{"id":2,"shopId":1,"name":"Hamburger","price":1.09,"quantity":1}' +
      ']',
    createdAt: new Date('2023-05-30 10:16:49.149'),
  },
  {
    id: 3,
    fullName: 'John Doe',
    email: 'john@gmail.com',
    phone: '+9999999999999',
    shippingAddress: 'Lviv city, Shevchenko str, build. 4, apt. 8',
    total: 42.75,
    items:
      '[{"id":1,"shopId":1,"name":"Big Mac","price":1.29,"quantity":10},' +
      '{"id":6,"shopId":1,"name":"Quarter Pounder®* with Cheese Deluxe","price":1.99,"quantity":15}' +
      ']',
    createdAt: new Date('2023-05-30 10:39:18.355'),
  },
  {
    id: 4,
    fullName: 'John Doe',
    email: 'john@gmail.com',
    phone: '+9999999999999',
    shippingAddress: 'Lviv city, Shevchenko str, build. 4, apt. 8',
    total: 15.99,
    items:
      '[{"id":1,"shopId":1,"name":"Big Mac","price":1.29,"quantity":5},{"id":3,"shopId":1,"name":"Cheeseburger","price":1.59,"quantity":6}]',
    createdAt: new Date('2023-05-31 08:19:38.935'),
  },
  {
    id: 6,
    fullName: 'John Doe',
    email: 'john@gmail.com',
    phone: '+9999999999999',
    shippingAddress: 'Lviv city, Shevchenko str, build. 4, apt. 8',
    total: 3.74,
    items:
      '[{"id":12,"shopId":3,"name":"Oleato™ Iced Shaken","price":1.99,"quantity":1},{"id":13,"shopId":3,"name":"Oleato™ Caffé Latte","price":1.75,"quantity":1}]',
    createdAt: new Date('2023-05-31 09:43:12.454'),
  },
  {
    id: 7,
    fullName: 'John Doe',
    email: 'john@gmail.com',
    phone: '+9999999999999',
    shippingAddress: 'Lviv city, Shevchenko str, build. 4, apt. 8',
    total: 4.93,
    items:
      '[{"id":12,"shopId":3,"name":"Oleato™ Iced Shaken","price":1.99,"quantity":1},{"id":13,"shopId":3,"name":"Oleato™ Caffé Latte","price":1.75,"quantity":1}]',
    createdAt: new Date('2023-05-31 09:43:12.454'),
  },
];
