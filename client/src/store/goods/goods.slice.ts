import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGoodsInitialState } from './goods.types';
import { IGoods } from 'src/types/goods.interface';

const initialState: IGoodsInitialState = {
	goods: [],
};

export const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
		addGoods: (state, action: PayloadAction<{ goods: IGoods[] }>) => {
			state.goods.push(...action.payload.goods);
		},
	},
});
