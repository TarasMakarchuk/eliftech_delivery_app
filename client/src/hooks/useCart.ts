import { useTypedSelector } from './useTypedSelector';
import { ICartItem } from '../types/cart-item.interface';

export const useCart = () => {
	const cart = useTypedSelector(state => state.cart.items);

	const total: number = cart.reduce(
		(total: number, item: ICartItem) =>
			total + item.goods.price * item.quantity,
		0,
	);

	return { cart, total };
};
