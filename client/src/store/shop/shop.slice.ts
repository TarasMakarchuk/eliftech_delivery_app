import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShopInitialState } from './shop.types';
import { IShop } from 'src/types/shop.interface';

const initialState: IShopInitialState = {
	currentShopId: 1,
	shops: [],
};

export const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		changeShopId: (state, action: PayloadAction<{ shopId: number }>) => {
			state.currentShopId = action.payload.shopId;
		},

		addShops: (state, action: PayloadAction<{ shops: IShop[] }>) => {
			state.shops.push(...action.payload.shops);
		},
	},
});
