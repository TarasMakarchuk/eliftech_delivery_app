import { FC } from 'react';
import { ShopCard } from './shopCard/ShopCard';
import { IShop } from '../../../types/shop.interface';
import './sidebar.css';

export const Sidebar: FC<{ shops: IShop[] }> = ({ shops }) => {
	return (
		<aside className='sidebar'>
			{shops.map(shop => (
				<ShopCard shop={shop} key={shop.id} />
			))}
		</aside>
	);
};
