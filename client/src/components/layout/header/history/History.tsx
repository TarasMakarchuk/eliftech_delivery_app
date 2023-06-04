import React, { FC, useState } from 'react';
import { HistoryItem } from 'src/components/layout/header/history/historyItem/HistoryItem';
import { CartService } from 'src/api/services/cartService';
import { IOrder } from 'src/types/order.interface';
import { useForm } from 'react-hook-form';
import { Button } from 'src/components/ui/button/Button';
import './history.css';

type HistoryFormData = {
	email: string;
	phone: string;
};

export const History: FC = () => {
	const [loading, setLoading] = useState(false);
	const [ordersData, setOrdersData] = useState<IOrder[]>([]);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<HistoryFormData>();

	const onSubmit = async (data: HistoryFormData) => {
		setLoading(true);
		const receiveData = await CartService.getOrdersByEmailAndPhone(data);
		if (receiveData) {
			setOrdersData(receiveData);
			reset();
			setLoading(false);
		}
	};

	return (
		<div className='history'>
			<div className='history-header'>
				<form className='history-submit-form' onSubmit={handleSubmit(onSubmit)}>
					<label className='contact-label'>
						{errors.email && errors.email.type === 'required' ? (
							<span style={{ color: 'red' }}>Field is required</span>
						) : (
							'Email'
						)}
						<input
							className='input-filed'
							type='text'
							{...register('email', { required: true })}
							placeholder='Email address'
						/>
					</label>

					<label className='contact-label'>
						{errors.email && errors.email.type === 'required' ? (
							<span style={{ color: 'red' }}>Field is required</span>
						) : (
							'Phone number'
						)}
						<input
							className='input-filed'
							type='text'
							{...register('phone', { required: true })}
							placeholder='Phone number'
						/>
					</label>
				</form>
				<Button title='Submit' onClick={handleSubmit(onSubmit)} />
			</div>
			<div className='history-item-container'>
				{!ordersData.length && (
					<div className='purchase-history-text'>
						To display your purchase history, enter your email and phone number
					</div>
				)}
				{loading && (
					<div style={{ fontSize: '28px', paddingTop: '150px' }}>
						Loading...
					</div>
				)}
				{!loading &&
					ordersData.map(order => {
						return <HistoryItem order={order} key={order.id} />;
					})}
			</div>
		</div>
	);
};
