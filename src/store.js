import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import screen   from './redux/screen/reducer';

const reducers = {
    screen
};

export const store = createStore(combineReducers(reducers), compose(applyMiddleware(thunk)));