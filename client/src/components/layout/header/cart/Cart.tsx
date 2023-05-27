import { FC } from 'react';
import { Input } from '../../../ui/input/Input';
import { Button } from '../../../ui/button/Button';
import { GoodItem } from './goodItem/GoodItem';
import './cart.css';

export const Cart: FC = () => {
	return (
		<>
			<div className='cart'>
				<div className='contact-container'>
					<div className='google-map'></div>
					<Input labelTitle='Full name' placeholder='Full name' />
					<Input labelTitle='Email' placeholder='Email address' />
					<Input labelTitle='Phone' placeholder='Phone number' />
					<Input
						labelTitle='Shipping address'
						placeholder='Zip code, city, street, building number, apartment number'
					/>
				</div>
				<div className='order-container'>
					<div className='goods-information'>
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
					</div>
				</div>
			</div>
			<div className='submit-container'>
				<span className='total-price'>Total Price: 99,98$</span>
				<Button title='Submit' />
			</div>
		</>
	);
};
