export class CreateGoodsDto {
  id: number;
  shopId: number;
  name: string;
  price: number;
  orderId?: number;
  img?: string;
}
