import { useDispatch } from 'react-redux';
import { shopSlice } from '../store/shop/shop.slice';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { cartSlice } from '../store/cart/cart.slice';
import { goodsSlice } from 'src/store/goods/goods.slice';

const rootActions = {
	...shopSlice.actions,
	...cartSlice.actions,
	...goodsSlice.actions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
