import { IGoods } from './goods.interface';

export interface ICartItem {
	id: number;
	goods: IGoods;
	quantity: number;
}
