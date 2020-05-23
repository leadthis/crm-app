import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import screen   from './redux/screen/reducer';
import user     from './redux/user/reducer';

const reducers = {
    screen,
    user
};

export const store = createStore(combineReducers(reducers), compose(applyMiddleware(thunk)));