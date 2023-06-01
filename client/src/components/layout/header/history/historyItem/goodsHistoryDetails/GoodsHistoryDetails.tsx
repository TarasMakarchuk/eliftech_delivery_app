import { FC } from 'react';
import { IGoods } from 'src/types/goods.interface';
import { imageApiPath } from 'src/api/consts/apiPaths';
import { formatToCurrency } from 'src/utils/formatToCurrency';
import './goodsHistoryDetails.css';

type Props = {
	items: IGoods;
};

export const GoodHistoryDetails: FC<Props> = ({ items }) => {
	return (
		<div className='goods-history-details-card '>
			<img
				className='goods-history-image'
				src={imageApiPath + items.img}
				alt={items.img}
			/>
			<div className='goods-history-content'>
				<p>{items.name}</p>
				<p>{formatToCurrency(items.price)}</p>
			</div>
		</div>
	);
};
