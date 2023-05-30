import { FC, useEffect, useState } from 'react';
import { GoodsCard } from './goodCard/GoodsCard';
import { IGoods } from 'src/types/goods.interface';
import { useShop } from 'src/hooks/useShop';
import { GoodsService } from 'src/api/services/goodsService';
import './content.css';

export const Content: FC = () => {
	const [goodsData, setGoodsData] = useState<IGoods[]>([]);
	const { shop } = useShop();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await GoodsService.getGoods();
				if (data) setGoodsData(data);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div className='content'>
			{loading && (
				<div style={{ fontSize: '28px', paddingTop: '150px' }}>Loading...</div>
			)}
			{!loading &&
				goodsData
					.filter(goods => goods.shopId === shop.currentShopId)
					.map(goods => <GoodsCard goods={goods} key={goods.id} />)}
		</div>
	);
};
