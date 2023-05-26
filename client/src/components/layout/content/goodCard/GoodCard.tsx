import { FC } from 'react';
import './goodCard.css';

export const GoodCard: FC = () => {
	return (
		<div className='good-card'>
			<img
				src='https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Big-Mac-2:product-header-desktop?wid=829&hei=455&dpr=off'
				alt=''
			/>
			<div className='good-information'>
				<h1 className='good-title'>Big Mak</h1>
				<p className='good-price'>Price 1,59$</p>
			</div>
			<button className='add-cart-button'>Add to Cart</button>
		</div>
	);
};
