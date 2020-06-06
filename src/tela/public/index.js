import React from 'react';

import {connect} from 'react-redux';

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

import Header from './../patterns/header';

import Home from './home';
import Login from './login';
import Cadastrar from './cadastrar';

function Index(props){
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

function mapStateToProps(state){
    return{}
}

function mapDispatchToProps(dispatch){
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);