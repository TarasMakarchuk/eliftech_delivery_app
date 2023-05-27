import { FC } from 'react';
import './goodItem.css';

export const GoodItem: FC = () => {
	return (
		<>
			<div className='good-item-card'>
				<div className='image-container'>
					<img
						src='https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Big-Mac-2:product-header-desktop?wid=829&hei=455&dpr=off'
						alt=''
					/>
				</div>
				<div className='good-information-container'>
					<p className='good-title'>Big Mak</p>
					<p className='good-price'>Price: 1,29$</p>
					<input
						className='good-quantity-choose'
						type='number'
						id='tentacles'
						name='tentacles'
						min='1'
						max='100'
						defaultValue='1'
					/>
				</div>
			</div>
		</>
	);
};
