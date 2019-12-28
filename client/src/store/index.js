import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';


import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';


const logger = createLogger();
const middlewares = [thunk, logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// function configureStore(initState) {
//     const logger = createLogger();
//     const store = createStore(
//         rootReducer,
//         initState,
//         // applyMiddleware(thunk, logger),
//         composeWithDevTools(applyMiddleware(thunk, logger))
//         );
//     const persistor = persistStore(store);
//     return {persistor, store};
// };


// export default { persistor, store } = configureStore();

export const persistor = persistStore(store);
export default { store, persistor };