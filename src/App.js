import React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App(prop){
    console.log(prop.loading);
    prop.setLoading();

    return(
        <></>
    );
}

function mapStateToProps(state){
    return {
        loading: state.screen.loading
    };
}

function mapDispatchToProps(dispatch){
    return {
        setLoading: () => dispatch({type: "setLoading"})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);