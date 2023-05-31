import { FC } from 'react';
import { IGoods } from 'src/types/goods.interface';
import { formatToCurrency } from 'src/utils/formatToCurrency';
import { AddToCartButton } from '../button/AddToCartButton';
import { imageApiPath } from 'src/api/consts/apiPaths';
import './goodsCard.css';

type Props = {
	goods: IGoods;
};

export const GoodsCard: FC<Props> = ({ goods }) => {
	return (
		<div className='goods-card'>
			<img src={imageApiPath + goods.img} alt={goods.img} />
			<div className='goods-information'>
				<h1 className='goods-title'>{goods.name}</h1>
				<p className='goods-price'>Price {formatToCurrency(goods.price)}</p>
			</div>
			<AddToCartButton goods={goods} />
		</div>
	);
};
