import { IShop } from 'src/types/shop.interface';

export interface IShopInitialState {
	currentShopId: number;
	isLoading: boolean;
	items: IShop[];
}
