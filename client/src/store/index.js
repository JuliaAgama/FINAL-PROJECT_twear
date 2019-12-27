import { createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const persistConfig = {
    key: 'cart',
    storage: storage,
    whitelist: ['cart'],
    stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const pStore = createStore(pReducer);
export const persistor = persistStore(pStore);

function configureStore(initState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initState,
        // applyMiddleware(thunk, logger),
        composeWithDevTools(applyMiddleware(thunk, logger))
    );
    return store;
};
export const store = configureStore();
