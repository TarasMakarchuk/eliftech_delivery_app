import { FC } from 'react';
import { Button } from '../../../ui/button/Button';
import { IGood } from '../../../../types/good.interface';
import { formatToCurrency } from '../../../../utils/formatToCurrency';
import './goodCard.css';

export const GoodCard: FC<{ good: IGood }> = ({ good }) => {
	const addToCart = () => {
		alert('Add to cart');
	};

	return (
		<div className='good-card'>
			<img src={good.img} alt={good.img} />
			<div className='good-information'>
				<h1 className='good-title'>{good.name}</h1>
				<p className='good-price'>Price {formatToCurrency(good.price)}</p>
			</div>
			<Button onClick={addToCart} title='Add To Cart' />

			{/*<button className='add-cart-button'>Add To Cart</button>*/}
		</div>
	);
};
