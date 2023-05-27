import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	IAddCartPayload,
	ICartInitialState,
	IChangeQuantityCardPayload,
} from './cart.types';

const initialState: ICartInitialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddCartPayload>) => {
			state.items.push({ ...action.payload, id: action.payload.good.id });
			state.items.forEach(item => (item.quantity = 1));
		},

		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(item => item.id !== action.payload.id);
		},

		changeQuantity: (
			state,
			action: PayloadAction<IChangeQuantityCardPayload>,
		) => {
			const { id, type } = action.payload;
			const item = state.items.find(item => item.id === id);

			if (item) {
				if (type === 'increase') item.quantity++;
				if (type === 'decrease') {
					if (item.quantity > 1) {
						item.quantity--;
					} else {
						item.quantity = 1;
					}
				}
			}
		},

		resetCart: state => {
			state.items = [];
		},
	},
});
