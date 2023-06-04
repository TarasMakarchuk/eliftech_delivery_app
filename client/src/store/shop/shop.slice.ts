import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShopInitialState } from './shop.types';
import { IShop } from 'src/types/shop.interface';

const initialState: IShopInitialState = {
	currentShopId: 1,
	isLoading: false,
	items: [],
};

export const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		changeShopId: (state, action: PayloadAction<{ shopId: number }>) => {
			state.currentShopId = action.payload.shopId;
		},

		setLoadingShops: (state, action: PayloadAction<{ isLoading: boolean }>) => {
			state.isLoading = action.payload.isLoading;
		},

		addShops: (state, action: PayloadAction<{ items: IShop[] }>) => {
			state.items.push(...action.payload.items);
		},
	},
});
