import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import {store,persistor} from './store/index';
import { PersistGate } from 'redux-persist/integration/react';

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
