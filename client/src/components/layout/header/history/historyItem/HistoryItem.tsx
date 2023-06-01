import { FC } from 'react';
import { IOrder } from 'src/types/order.interface';
import { GoodHistoryDetails } from 'src/components/layout/header/history/historyItem/goodsHistoryDetails/GoodsHistoryDetails';
import { IGoods } from 'src/types/goods.interface';
import { formatToCurrency } from 'src/utils/formatToCurrency';
import './historyItem.css';

type Props = {
	order: IOrder;
};

export const HistoryItem: FC<Props> = ({ order }) => {
	const { items } = order;
	const orderItems = JSON.parse(String(items));

	return (
		<div className='history-card'>
			<div>
				<div className='history-content'>
					{orderItems.map((items: IGoods) => {
						return <GoodHistoryDetails items={items} key={items.id} />;
					})}
				</div>
			</div>
			<div className='order-price'>
				<p className='history-total-price'>
					Total price: {formatToCurrency(order.total)}
				</p>
			</div>
		</div>
	);
};
