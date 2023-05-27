import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShopInitialState } from './shop.types';

const initialState: IShopInitialState = {
	currentShopId: 1,
};

export const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		changeShopId: (state, action: PayloadAction<{ shopId: number }>) => {
			state.currentShopId = action.payload.shopId;
		},
	},
});
