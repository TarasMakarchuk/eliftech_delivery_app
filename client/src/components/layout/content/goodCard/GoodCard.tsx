import { FC } from 'react';
import { IGood } from 'src/types/good.interface';
import { formatToCurrency } from 'src/utils/formatToCurrency';
import { AddToCartButton } from '../button/AddToCartButton';
import './goodCard.css';

export const GoodCard: FC<{ good: IGood }> = ({ good }) => {
	return (
		<div className='good-card'>
			<img src={good.img} alt={good.img} />
			<div className='good-information'>
				<h1 className='good-title'>{good.name}</h1>
				<p className='good-price'>Price {formatToCurrency(good.price)}</p>
			</div>
			<AddToCartButton good={good} />
		</div>
	);
};
