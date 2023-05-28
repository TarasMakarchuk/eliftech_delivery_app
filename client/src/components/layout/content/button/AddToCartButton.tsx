import { FC } from 'react';
import { IGoods } from 'src/types/goods.interface';
import { useCart } from 'src/hooks/useCart';
import { useActions } from 'src/hooks/useActions';

interface IAddToCartButton {
	goods: IGoods;
}

export const AddToCartButton: FC<IAddToCartButton> = ({ goods }) => {
	const { addToCart, removeFromCart } = useActions();
	const { cart } = useCart();

	const currentElement = cart.find(cartItem => cartItem.goods.id === goods.id);

	return (
		<button
			onClick={() =>
				currentElement
					? removeFromCart({ id: currentElement.id })
					: addToCart({
							goods,
							quantity: 0,
					  })
			}
			style={{
				width: '180px',
				height: '50px',
				backgroundColor: '#e7e7e7',
				borderRadius: '7px',
				marginTop: '10px',
				marginLeft: '170px',
				cursor: 'pointer',
				fontSize: '16px',
			}}
		>
			{currentElement ? 'Remove From Cart 🧺' : 'Add To Cart'}
		</button>
	);
};
