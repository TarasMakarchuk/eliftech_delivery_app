export class CreateOrderDto {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  shippingAddress: string;
  total: number;
  items: string;
}
