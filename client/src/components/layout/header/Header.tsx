import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'src/hooks/useCart';
import './header.css';

export const Header: FC = () => {
	const { cart } = useCart();
	return (
		<header className='header'>
			<Link to='/' className='link-to-page vertical-right-border'>
				Shop
			</Link>
			<Link to='/cart' className='link-to-page vertical-right-border'>
				Shopping Cart
				{cart.length > 0 && <div className='goods-quantity'>{cart.length}</div>}
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
