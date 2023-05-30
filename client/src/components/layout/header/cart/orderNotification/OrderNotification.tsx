import { FC } from 'react';
import './orderNotification.css';

type Props = {
	display: string;
	onClose: () => void;
};

export const OrderNotification: FC<Props> = ({ display, onClose }) => {
	return (
		<div className='notification-container' style={{ display: `${display}` }}>
			<div className='notification-card'>
				<div className='notification-header'>
					<span className='close' onClick={onClose}>
						&times;
					</span>
					<span style={{ color: 'mediumseagreen', fontWeight: 'bold' }}>
						Success
					</span>
				</div>
				<p>The order has been successfully placed.</p>
				<p>
					In case of additional questions our manager will contact you. An email
					with order information has been sent to your email.
				</p>
				<p>Wait for the goods to be delivered to the address you provided.</p>
			</div>
		</div>
	);
};
