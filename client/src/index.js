import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/lib/integration/react';

import { persistor, pStore, store } from './store';

import {Router} from './routes/';
import Spinner from './components/common/Spinner';

ReactDOM.render(
    <Provider store={store}>
    {/* <Provider store={pStore}> */}
        <PersistGate loading={<Spinner />} persistor={persistor}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </PersistGate>
        {/* <BrowserRouter>
            <Router/>
        </BrowserRouter> */}
    </Provider>,
    document.getElementById('root')
);
