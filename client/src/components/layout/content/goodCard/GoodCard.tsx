import { FC } from 'react';
import { Button } from '../../../ui/button/Button';
import { IGood } from '../../../../types/good.interface';
import './goodCard.css';

export const GoodCard: FC<{ good: IGood }> = ({ good }) => {
	return (
		<div className='good-card'>
			<img src={good.img} alt={good.img} />
			<div className='good-information'>
				<h1 className='good-title'>{good.name}</h1>
				<p className='good-price'>Price {good.price}</p>
			</div>
			<Button title='Add To Cart' />

			{/*<button className='add-cart-button'>Add to Cart</button>*/}
		</div>
	);
};
