import React, { FC, useState } from 'react';
import { GoodsItem } from './goodItem/GoodsItem';
import { useForm } from 'react-hook-form';
import { Button } from 'src/components/ui/button/Button';
import { useCart } from 'src/hooks/useCart';
import { formatToCurrency } from 'src/utils/formatToCurrency';
import { roundPrice } from 'src/utils/roundPrice';
import { CartService } from 'src/api/services/cartService';
import { DeliveryMap } from 'src/components/layout/header/cart/deliveryMap/DeliveryMap';
import { useActions } from 'src/hooks/useActions';
import { OrderNotification } from 'src/components/layout/header/cart/orderNotification/OrderNotification';
import { ICartItem } from 'src/types/cart-item.interface';
import './cart.css';

type OrderSubmitForm = {
	fullName: string;
	email: string;
	phone: string;
	shippingAddress: string;
};

export const Cart: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<OrderSubmitForm>();
	const { cart, total } = useCart();
	const { resetCart } = useActions();

	const [showNotification, setShowNotification] = useState<string>('none');

	const closeNotificationHandler = () => setShowNotification('none');

	const goods = cart.map((goods: ICartItem) => {
		const { quantity } = goods;
		return { ...goods.goods, quantity };
	});

	const onSubmit = (data: OrderSubmitForm) => {
		if (cart.length) {
			resetCart();
			reset();
			setShowNotification('block');

			return CartService.placeOrder({
				...data,
				items: JSON.stringify(goods),
				total: roundPrice(total),
			});
		}
	};

	return (
		<>
			<OrderNotification
				display={showNotification}
				onClose={closeNotificationHandler}
			/>
			<div className='cart'>
				<div className='contact-container'>
					<div className='delivery-map-container'>
						<DeliveryMap />
					</div>
					<form className='submit-form' onSubmit={handleSubmit(onSubmit)}>
						<label className='contact-label'>
							{errors.fullName && errors.fullName.type === 'required' ? (
								<span style={{ color: 'red' }}>Field is required</span>
							) : (
								'Full Name'
							)}
							<input
								className='input-filed'
								type='text'
								{...register('fullName', { required: true })}
								placeholder='Full name'
							/>
						</label>

						<label className='contact-label'>
							{errors.email && errors.email.type === 'required' ? (
								<span style={{ color: 'red' }}>Field is required</span>
							) : (
								'Email address'
							)}
							<input
								className='input-filed'
								type='text'
								{...register('email', { required: true })}
								placeholder='Email'
							/>
						</label>
						<label className='contact-label'>
							{errors.phone && errors.phone.type === 'required' ? (
								<span style={{ color: 'red' }}>Field is required</span>
							) : (
								'Phone number'
							)}
							<input
								className='input-filed'
								type='text'
								{...register('phone', { required: true })}
								placeholder='Phone'
							/>
						</label>
						<label className='contact-label'>
							{errors.shippingAddress &&
							errors.shippingAddress.type === 'required' ? (
								<span style={{ color: 'red' }}>Field is required</span>
							) : (
								'Shipping address'
							)}
							<input
								className='input-filed'
								type='text'
								{...register('shippingAddress', { required: true })}
								placeholder='Zip code, city, street, building number, apartment number, entrance code'
							/>
						</label>
					</form>
				</div>
				<div className='order-container'>
					<div className='goods-information'>
						{cart.map(goods => (
							<GoodsItem
								goods={goods.goods}
								quantity={goods.quantity}
								key={goods.id}
							/>
						))}
					</div>
				</div>
			</div>
			<div className='submit-card'>
				<span className='total-price'>
					Total Price: {formatToCurrency(total)}
				</span>
				<Button title='Place order' onClick={handleSubmit(onSubmit)} />
			</div>
		</>
	);
};
