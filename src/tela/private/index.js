import React from 'react';

import {connect} from 'react-redux';

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './home';

const Index = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" exact component={Home}/>
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