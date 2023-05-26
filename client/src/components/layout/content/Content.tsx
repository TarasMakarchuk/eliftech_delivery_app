import { FC } from 'react';
import { GoodCard } from './goodCard/GoodCard';
import './content.css';

export const Content: FC = () => {
	return (
		<div className='content'>
			<GoodCard />
			<GoodCard />
			<GoodCard />
			<GoodCard />
			<GoodCard />
			<GoodCard />
			<GoodCard />
			<GoodCard />
		</div>
	);
};
