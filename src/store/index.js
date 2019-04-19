import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'v1',
  storage,
  whitelist: ['user']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const initialState={};

let middleware=[thunk];
const loggerMiddleware = require('redux-logger');
middleware = [ ...middleware, loggerMiddleware.createLogger()];

export const store  = createStore(persistedReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  ));
export const persistor = persistStore(store)