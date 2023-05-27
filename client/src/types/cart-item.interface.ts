import { IGood } from './good.interface';

export interface ICartItem {
	id: number;
	good: IGood;
	quantity: number;
}
