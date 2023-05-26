import { FC } from 'react';
import { Cart } from './cart/Cart';
import { History } from './history/History';
import { Coupons } from './coupons/Coupons';
import './header.css';

export const Header: FC = () => {
	return (
		<header className='header'>
			<div className='shop'>Shop</div>
			<Cart />
			<History />
			<Coupons />
		</header>
	);
};
