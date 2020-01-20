import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const logger = createLogger();
// const middlewares = [thunk, logger];
const middlewares = [thunk];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };