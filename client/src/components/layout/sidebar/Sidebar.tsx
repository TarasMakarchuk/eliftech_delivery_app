import { FC } from 'react';
import { ShopCard } from './shopCard/ShopCard';
import { useCart } from 'src/hooks/useCart';
import { useShop } from 'src/hooks/useShop';
import './sidebar.css';

export const Sidebar: FC = () => {
	const { cart } = useCart();
	const { shop } = useShop();

	return (
		<aside className='sidebar'>
			{shop.isLoading && (
				<div style={{ fontSize: '28px', paddingTop: '150px' }}>Loading...</div>
			)}
			{!shop.isLoading &&
				shop.items.map(shop => {
					let isActiveShop = true;
					if (cart.length) {
						isActiveShop = cart[0].goods.shopId === shop.id;
					}
					return (
						<ShopCard shop={shop} isActiveShop={isActiveShop} key={shop.id} />
					);
				})}
		</aside>
	);
};
