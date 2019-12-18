/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './redux/store';

const ConnectedApp = <Provider store={store}>
    <App />
</Provider>;

ReactDOM.render(ConnectedApp, document.getElementById('root'));

