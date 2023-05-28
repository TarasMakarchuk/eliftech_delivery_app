import { FC } from 'react';
import { GoodCard } from './goodCard/GoodCard';
import { IGood } from 'src/types/good.interface';
import { useShop } from 'src/hooks/useShop';
import './content.css';

export const Content: FC<{ goods: IGood[] }> = ({ goods }) => {
	const { shop } = useShop();

	return (
		<div className='content'>
			{goods
				.filter(good => good.shopId === shop.currentShopId)
				.map(good => (
					<GoodCard good={good} key={good.id} />
				))}
		</div>
	);
};
