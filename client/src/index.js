import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
// - persistStore : 유지하고 싶은 store를 인자로 전달하면, persistor 객체를 반환한다.
import { persistStore } from 'redux-persist';

export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);
