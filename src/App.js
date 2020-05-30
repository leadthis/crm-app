import React from 'react';
import { connect } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import Public from './tela/public/index';

function App(prop){

    const cookie = document.cookie.split("; ");

    if(!cookie.some(rx => /sessionId/g.test(rx))){
        return(
            <>
                <Public />
            </>
        );
    }else if(prop.login === false){
        prop.setLogin();
    }

    if(prop.login === false){
        return(
            <>
                <Public />
            </>
        );
    }
}

function mapStateToProps(state){
    return {
        loading: state.screen.loading,
        login: state.user.login
    };
}

function mapDispatchToProps(dispatch){
    return {
        setLoading: () => dispatch({type: "setLoading"}),
        setLogin: () => dispatch({type: "setLogin"})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);