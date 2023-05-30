import { FC } from 'react';
import { IShop } from 'src/types/shop.interface';
import { useActions } from 'src/hooks/useActions';
import { imageApiPath } from 'src/api/consts/apiPaths';
import './shopCard.css';

type Props = {
	shop: IShop;
};

export const ShopCard: FC<Props> = ({ shop }) => {
	const { changeShopId } = useActions();

	return (
		<div
			className='shop-card'
			onClick={() => changeShopId({ shopId: shop.id })}
		>
			<span>{shop.name}</span>
			<img
				className='shop-logo'
				src={imageApiPath + shop.img}
				alt={shop.name + ' image'}
			/>
		</div>
	);
};
