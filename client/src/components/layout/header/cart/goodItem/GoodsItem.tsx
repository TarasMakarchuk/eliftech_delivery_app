import { FC } from 'react';
import { IGoods } from 'src/types/goods.interface';
import { useActions } from 'src/hooks/useActions';
import { formatToCurrency } from 'src/utils/formatToCurrency';
import { imageApiPath } from 'src/api/consts/apiPaths';
import './goodsItem.css';

type Props = {
	goods: IGoods;
	quantity: number;
};

export const GoodsItem: FC<Props> = ({ goods, quantity }) => {
	const { removeFromCart, changeQuantity } = useActions();

	return (
		<>
			<div className='good-item-card'>
				<div className='image-container'>
					<img src={imageApiPath + goods.img} alt={goods.name} />
				</div>
				<div className='good-information-container'>
					<p className='good-item-title'>{goods.name}</p>
					<p className='good-item-price'>
						Price: {formatToCurrency(goods.price)}
					</p>

					<div className='good-quantity-block'>
						<button
							className='decrease-button'
							onClick={() => changeQuantity({ id: goods.id, type: 'decrease' })}
						>
							-
						</button>

						<input
							onChange={() => {}}
							className='good-quantity-choose'
							id='tentacles'
							name='tentacles'
							min='1'
							max='100'
							value={quantity}
						/>
						<button
							className='increase-button'
							onClick={() => changeQuantity({ id: goods.id, type: 'increase' })}
						>
							+
						</button>
					</div>
					<span className='subtotal-price'>
						Subtotal Price: {formatToCurrency(goods.price * quantity)}
					</span>
					<button
						className='remove-button'
						onClick={() => removeFromCart({ id: goods.id })}
					>
						Remove
					</button>
				</div>
			</div>
		</>
	);
};
