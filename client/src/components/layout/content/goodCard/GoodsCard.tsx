import { FC } from 'react';
import { IGoods } from 'src/types/goods.interface';
import { formatToCurrency } from 'src/utils/formatToCurrency';
import { AddToCartButton } from '../button/AddToCartButton';
import './goodsCard.css';

export const GoodsCard: FC<{ goods: IGoods }> = ({ goods }) => {
	return (
		<div className='goods-card'>
			<img src={goods.img} alt={goods.img} />
			<div className='goods-information'>
				<h1 className='goods-title'>{goods.name}</h1>
				<p className='goods-price'>Price {formatToCurrency(goods.price)}</p>
			</div>
			<AddToCartButton goods={goods} />
		</div>
	);
};
