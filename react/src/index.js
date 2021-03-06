import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root/component';
import configureStore from './store';
import initialState from './initialState';


const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);


render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
