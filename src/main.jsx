import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppProvider } from './components/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryCLient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
	<AppProvider>
		<QueryClientProvider client={queryCLient}>
			<App />
		</QueryClientProvider>
	</AppProvider>
);
