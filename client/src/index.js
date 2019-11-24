import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Router} from './routes/';
import './index.css';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore();
const jss = create({
    ...jssPreset(),
    // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
    insertionPoint: document.getElementById('jss-insertion-point'),
});



ReactDOM.render(
    <StylesProvider jss={jss}>
        <Provider store={store}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
    </StylesProvider>, document.getElementById('root'));
