import { FC } from 'react';
import { IShop } from 'src/types/shop.interface';
import { useActions } from 'src/hooks/useActions';
import { imageApiPath } from 'src/api/consts/apiPaths';
import './shopCard.css';

type Props = {
	shop: IShop;
	isActiveShop: boolean;
};

export const ShopCard: FC<Props> = ({ shop, isActiveShop }) => {
	const { changeShopId } = useActions();

	const background = !isActiveShop ? 'rgba(239,239,239,0.45)' : 'white';
	return (
		<button
			disabled={!isActiveShop}
			className='shop-card'
			onClick={() => changeShopId({ shopId: shop.id })}
			style={{ background }}
		>
			<span>{shop.name}</span>
			{!isActiveShop && <p className='lock'>🔒</p>}
			<img
				className='shop-logo'
				src={imageApiPath + shop.img}
				alt={shop.name + ' image'}
			/>
		</button>
	);
};
