import { FC } from 'react';
import { IOrder } from 'src/types/order.interface';
import { formatToDate } from 'src/utils/formatToDate';
import './historyItem.css';

type Props = {
	order: IOrder;
	orderNumber: number;
};

export const HistoryItem: FC<Props> = ({ order, orderNumber }) => {
	const orderDetails = String(order.items).replace(
		/['‘’"“” /\{(.+?)\/(.+?)\}/\[(.+?)\/(.+?)\]]/g,
		' ',
	);

	return (
		<div className='history-card'>
			<div className='order-number'>
				<p>{orderNumber}.</p>
			</div>
			<div className='full-name'>
				<p>{order.fullName}</p>
			</div>
			<div className='email'>
				<p>{order.email}</p>
			</div>
			<div className='phone'>
				<p>{order.phone}</p>
			</div>
			<div className='shipping-address'>
				<p>{order.shippingAddress}</p>
			</div>
			<div className='order-price'>
				<p>{order.total}</p>
			</div>
			<div className='order-date'>
				<p>{formatToDate(order.createdAt)}</p>
			</div>
			<div className='order-items'>
				<div className='order-details'>{orderDetails}</div>
			</div>
		</div>
	);
};
