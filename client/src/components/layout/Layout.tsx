import { FC } from 'react';
import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';
import { Content } from './content/Content';
import './layout.css';

const Layout: FC = () => {
	return (
		<div className='layout'>
			<main>
				<Header />
				<div className='content-wrapper'>
					<Sidebar />
					<Content />
				</div>
			</main>
		</div>
	);
};

export default Layout;
