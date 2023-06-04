import { IGoods } from 'src/types/goods.interface';

export interface IGoodsInitialState {
	items: IGoods[];
	isLoading: boolean;
}
