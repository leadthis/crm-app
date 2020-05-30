import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

import Header from './../patterns/header';

import Home from './home';
import Login from './login';

function index(){
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}

export default index;