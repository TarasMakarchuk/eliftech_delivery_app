import { FC, useEffect, useState } from 'react';
import { HistoryItem } from 'src/components/layout/header/history/historyItem/HistoryItem';
import { CartService } from 'src/api/services/cartService';
import { IOrder } from 'src/types/order.interface';
import './history.css';

export const History: FC = () => {
	const [loading, setLoading] = useState(true);
	const [ordersData, setOrdersData] = useState<IOrder[]>([]);

	let ordersCounter = 0;

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await CartService.getOrders();
				if (data) setOrdersData(data);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div className='history'>
			<div className='history-header'>
				<div className='history-number'>
					<p>Order #</p>
				</div>
				<div className='history-full-name'>
					<p>FullName</p>
				</div>
				<div className='history-email'>
					<p>Email</p>
				</div>
				<div className='history-phone'>
					<p>Phone</p>
				</div>
				<div className='history-shipping-address'>
					<p>Shipping Address</p>
				</div>
				<div className='history-order-price'>
					<p>Total price</p>
				</div>
				<div className='history-order-date'>
					<p>Date</p>
				</div>
				<div className='history-order-items'>
					<p>Order details</p>
				</div>
			</div>
			<div className='history-item-container'>
				{loading && (
					<div style={{ fontSize: '28px', paddingTop: '150px' }}>
						Loading...
					</div>
				)}
				{!loading &&
					ordersData.map(order => {
						ordersCounter++;
						return (
							<HistoryItem
								order={order}
								orderNumber={ordersCounter}
								key={order.id}
							/>
						);
					})}
			</div>
		</div>
	);
};
