import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { shopSlice } from './shop/shop.slice';
import { cartSlice } from './cart/cart.slice';
import { goodsSlice } from 'src/store/goods/goods.slice';

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	shop: shopSlice.reducer,
	goods: goodsSlice.reducer,
});

const persistConfig = {
	key: 'delivery-app',
	storage,
	whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type TypedRootState = ReturnType<typeof rootReducer>;
