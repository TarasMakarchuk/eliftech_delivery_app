import { useDispatch } from 'react-redux';
import { shopSlice } from '../store/shop/shop.slice';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

const rootActions = {
	...shopSlice.actions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
