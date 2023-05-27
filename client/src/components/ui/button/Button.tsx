import React, { FC } from 'react';
import './button.css';

interface IButton {
	title: string;
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button: FC<IButton> = ({ title, onClick }) => {
	return (
		<div className='button-container'>
			<button
				onClick={onClick}
				style={{
					width: '180px',
					height: '50px',
					backgroundColor: '#e7e7e7',
					borderRadius: '7px',
					marginTop: '10px',
					marginLeft: '170px',
					cursor: 'pointer',
					fontSize: '16px',
				}}
			>
				{title}
			</button>
		</div>
	);
};
