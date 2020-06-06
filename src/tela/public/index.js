import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

import Header from './../patterns/header';

import Home from './home';
import Login from './login';
import Cadastrar from './cadastrar';

function index(){
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/cadastrar" component={Cadastrar}/>
            </Switch>
        </BrowserRouter>
    );
}

export default index;