import { FC } from 'react';
import { IGood } from 'src/types/good.interface';
import { useActions } from 'src/hooks/useActions';
import { formatToCurrency } from 'src/utils/formatToCurrency';
import './goodItem.css';

export const GoodItem: FC<{ good: IGood; quantity: number }> = ({
	good,
	quantity,
}) => {
	const { removeFromCart, changeQuantity } = useActions();

	return (
		<>
			<div className='good-item-card'>
				<div className='image-container'>
					<img src={good.img} alt={good.name} />
				</div>
				<div className='good-information-container'>
					<p className='good-item-title'>{good.name}</p>
					<p className='good-item-price'>
						Price: {formatToCurrency(good.price)}
					</p>

					<div className='good-quantity-block'>
						<button
							className='decrease-button'
							onClick={() => changeQuantity({ id: good.id, type: 'decrease' })}
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
							onClick={() => changeQuantity({ id: good.id, type: 'increase' })}
						>
							+
						</button>
					</div>
					<span className='subtotal-price'>
						Subtotal Price: {formatToCurrency(good.price * quantity)}
					</span>
					<button
						className='remove-button'
						onClick={() => removeFromCart({ id: good.id })}
					>
						Remove
					</button>
				</div>
			</div>
		</>
	);
};
