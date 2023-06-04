import { FC } from 'react';
import { GoodsCard } from './goodCard/GoodsCard';
import { useShop } from 'src/hooks/useShop';
import { useGoods } from 'src/hooks/useGoods';
import './content.css';

export const Content: FC = () => {
	const { shop } = useShop();
	const { goods } = useGoods();

	return (
		<div className='content'>
			{goods.isLoading && (
				<div style={{ fontSize: '28px', paddingTop: '150px' }}>Loading...</div>
			)}
			{!goods.isLoading &&
				goods.items
					.filter(goods => goods.shopId === shop.currentShopId)
					.map(goods => <GoodsCard goods={goods} key={goods.id} />)}
		</div>
	);
};
