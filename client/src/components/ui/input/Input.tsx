import { FC } from 'react';
import './input.css';

interface IInput {
	labelTitle: string;
	placeholder: string;
}

export const Input: FC<IInput> = ({ labelTitle, placeholder }) => {
	return (
		<div className='input-container'>
			<label className='contact-label' htmlFor=''>
				{labelTitle}
			</label>
			<input className='input-filed' type='text' placeholder={placeholder} />
		</div>
	);
};
