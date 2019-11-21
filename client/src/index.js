import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Router} from './routes/';
import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
