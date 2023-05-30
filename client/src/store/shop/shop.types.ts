import { IShop } from 'src/types/shop.interface';

export interface IShopInitialState {
	currentShopId: number;
	shops: IShop[];
}
