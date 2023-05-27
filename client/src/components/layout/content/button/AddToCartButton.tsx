import { FC } from 'react';
import { IGood } from '../../../../types/good.interface';
import { useCart } from '../../../../hooks/useCart';
import { useActions } from '../../../../hooks/useActions';

interface IAddToCartButton {
	good: IGood;
}

export const AddToCartButton: FC<IAddToCartButton> = ({ good }) => {
	const { addToCart, removeFromCart } = useActions();
	const { cart } = useCart();

	const currentElement = cart.find(cartItem => cartItem.good.id === good.id);

	return (
		<button
			onClick={() =>
				currentElement
					? removeFromCart({ id: currentElement.id })
					: addToCart({
							good,
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
