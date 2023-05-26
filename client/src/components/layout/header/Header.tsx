import { FC } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export const Header: FC = () => {
	return (
		<header className='header'>
			<Link to='/' className='link-to-page vertical-right-border'>
				Shop
			</Link>
			<Link to='/cart' className='link-to-page vertical-right-border'>
				Shopping Cart
			</Link>
			<Link to='/history' className='link-to-page vertical-right-border'>
				History
			</Link>
			<Link to='/coupons' className='link-to-page'>
				Coupons
			</Link>
		</header>
	);
};
