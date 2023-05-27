import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './components/layout/reset.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<React.StrictMode>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</React.StrictMode>
			</PersistGate>
		</Provider>
	</QueryClientProvider>,
);
