import { FC } from 'react';
import { GoodItem } from './goodItem/GoodItem';
import { useForm } from 'react-hook-form';
import { Button } from '../../../ui/button/Button';
import './cart.css';

export const Cart: FC = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => alert(JSON.stringify(data));

	return (
		<>
			<div className='cart'>
				<div className='contact-container'>
					<div className='google-map'></div>
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
								placeholder='Email address'
							/>
						</label>
						<label className='contact-label'>
							Phone number
							<input
								className='input-filed'
								type='text'
								{...register('phone')}
								placeholder='Full name'
							/>
						</label>
						<label className='contact-label'>
							Shipping address
							<input
								className='input-filed'
								type='text'
								{...register('shippingAddress')}
								placeholder='Shipping address'
							/>
						</label>
					</form>
				</div>
				<div className='order-container'>
					<div className='goods-information'>
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
						<GoodItem />
					</div>
				</div>
			</div>
			<div className='submit-card'>
				<span className='total-price'>Total Price: 99,98$</span>
				<Button title='Place order' onClick={handleSubmit(onSubmit)} />
			</div>
		</>
	);
};
