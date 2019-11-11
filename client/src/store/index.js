import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

export function configureStore(initState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initState,
        // applyMiddleware(logger, thunk),
        composeWithDevTools(applyMiddleware(thunk, logger))
    );
    return store;
};
