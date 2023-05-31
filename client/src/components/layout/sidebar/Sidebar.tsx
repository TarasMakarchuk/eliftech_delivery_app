import { FC, useEffect, useState } from 'react';
import { ShopCard } from './shopCard/ShopCard';
import { IShop } from 'src/types/shop.interface';
import { ShopService } from 'src/api/services/shopService';
import { useCart } from 'src/hooks/useCart';
import './sidebar.css';

export const Sidebar: FC = () => {
	const [loading, setLoading] = useState(true);
	const [shopsData, setShopsData] = useState<IShop[]>([]);
	const { cart } = useCart();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await ShopService.getShops();
				if (data) setShopsData(data);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	return (
		<aside className='sidebar'>
			{loading && (
				<div style={{ fontSize: '28px', paddingTop: '150px' }}>Loading...</div>
			)}
			{!loading &&
				shopsData.map(shop => {
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
