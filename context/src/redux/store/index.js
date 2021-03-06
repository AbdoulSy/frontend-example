import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import initialState from './initialState';
import reducers from '../reducers';

export default createStore(reducers, initialState, composeWithDevTools(
    applyMiddleware(thunk)));
