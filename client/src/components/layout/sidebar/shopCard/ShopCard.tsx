import { FC } from 'react';
import { IShop } from '../../../../types/shop.interface';
import './shopCard.css';

export const ShopCard: FC<{ shop: IShop }> = ({ shop }) => {
	return (
		<div className='shop-card'>
			<span>{shop.name}</span>
			<img className='shop-logo' src={shop.img} alt={shop.name + ' image'} />
		</div>
	);
};
