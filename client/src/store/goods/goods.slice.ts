import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGoodsInitialState } from './goods.types';
import { IGoods } from 'src/types/goods.interface';

const initialState: IGoodsInitialState = {
	items: [],
	isLoading: false,
};

export const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
		addGoods: (state, action: PayloadAction<{ items: IGoods[] }>) => {
			state.items.push(...action.payload.items);
		},

		setLoadingGoods: (state, action: PayloadAction<{ isLoading: boolean }>) => {
			state.isLoading = action.payload.isLoading;
		},
	},
});
