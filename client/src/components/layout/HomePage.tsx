import React, { FC } from 'react';
import { Sidebar } from './sidebar/Sidebar';
import { Content } from './content/Content';
import './homePage.css';

const HomePage: FC = () => {
	return (
		<div className='home-page'>
			<main>
				<div className='content-wrapper'>
					<Sidebar />
					<Content />
				</div>
			</main>
		</div>
	);
};

export default HomePage;
