import { FC } from 'react';
import { IShop } from 'src/types/shop.interface';
import { useActions } from 'src/hooks/useActions';
import './shopCard.css';

export const ShopCard: FC<{ shop: IShop }> = ({ shop }) => {
	const { changeShopId } = useActions();

	return (
		<div
			className='shop-card'
			onClick={() => changeShopId({ shopId: shop.id })}
		>
			<span>{shop.name}</span>
			<img className='shop-logo' src={shop.img} alt={shop.name + ' image'} />
		</div>
	);
};
