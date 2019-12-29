import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/lib/integration/react';

import { persistor, store } from './store';

import {Router} from './routes/';
import Spinner from './components/common/Spinner';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={<Spinner />} persistor={persistor}>
                <Router/>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
