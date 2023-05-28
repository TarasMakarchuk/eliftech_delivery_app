import { FC } from 'react';
import { Sidebar } from './sidebar/Sidebar';
import { Content } from './content/Content';
import { shops } from 'src/fakeData/shops';
import { goods } from 'src/fakeData/goods';
import './homePage.css';

const HomePage: FC = () => {
	return (
		<div className='home-page'>
			<main>
				<div className='content-wrapper'>
					<Sidebar shops={shops} />
					<Content goods={goods} />
				</div>
			</main>
		</div>
	);
};

export default HomePage;
