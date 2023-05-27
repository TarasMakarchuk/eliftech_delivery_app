import { FC } from 'react';
import { GoodCard } from './goodCard/GoodCard';
import { IGood } from '../../../types/good.interface';
import './content.css';

export const Content: FC<{ goods: IGood[] }> = ({ goods }) => {
	return (
		<div className='content'>
			{goods.map(good => (
				<GoodCard good={good} key={good.id} />
			))}
		</div>
	);
};
