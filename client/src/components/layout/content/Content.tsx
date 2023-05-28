import { FC } from 'react';
import { GoodsCard } from './goodCard/GoodsCard';
import { IGoods } from 'src/types/goods.interface';
import { useShop } from 'src/hooks/useShop';
import './content.css';

export const Content: FC<{ goods: IGoods[] }> = ({ goods }) => {
	const { shop } = useShop();

	return (
		<div className='content'>
			{goods
				.filter(goods => goods.shopId === shop.currentShopId)
				.map(goods => (
					<GoodsCard goods={goods} key={goods.id} />
				))}
		</div>
	);
};
