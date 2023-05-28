import React, { FC } from 'react';
import { GoodItem } from './goodItem/GoodItem';
import { useForm } from 'react-hook-form';
import { Button } from 'src/components/ui/button/Button';
import { useCart } from 'src/hooks/useCart';
import { formatToCurrency } from 'src/utils/formatToCurrency';
import { roundPrice } from 'src/utils/roundPrice';
import { CartService } from 'src/api/services/cartService';
import { DeliveryMap } from 'src/components/layout/header/cart/deliveryMap/DeliveryMap';
import './cart.css';

export const Cart: FC = () => {
	const { register, handleSubmit } = useForm();
	const { cart, total } = useCart();

	const onSubmit = (data: any) => {
		console.log({
			...data,
			items: cart,
			total: roundPrice(total),
		});
		return CartService.placeOrder({
			...data,
			items: cart,
			total: roundPrice(total),
		});
	};

	return (
		<>
			<div className='cart'>
				<div className='contact-container'>
					<div className='delivery-map-container'>
						<DeliveryMap />
					</div>
					<form className='submit-form' onSubmit={handleSubmit(onSubmit)}>
						<label className='contact-label'>
							Full Name
							<input
								className='input-filed'
								type='text'
								{...register('fullName')}
								placeholder='Full name'
							/>
						</label>
						<label className='contact-label'>
							Email address
							<input
								className='input-filed'
								type='text'
								{...register('email')}
								placeholder='Email'
							/>
						</label>
						<label className='contact-label'>
							Phone number
							<input
								className='input-filed'
								type='text'
								{...register('phone')}
								placeholder='Phone'
							/>
						</label>
						<label className='contact-label'>
							Shipping address
							<input
								className='input-filed'
								type='text'
								{...register('shippingAddress')}
								placeholder='Zip code, city, street, building number, apartment number, entrance code'
							/>
						</label>
					</form>
				</div>
				<div className='order-container'>
					<div className='goods-information'>
						{cart.map(good => (
							<GoodItem
								good={good.good}
								quantity={good.quantity}
								key={good.id}
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
