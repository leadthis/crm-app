import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import Public from './tela/public/index';
import Private from './tela/private/index';

import {verifyLogin} from './redux/user/actions';

function App(props){
    
    useEffect(() => {props.verifyLogin(); console.log("APP CHAMDO, login é:" + props.login)}, []);
    
    if(props.login){
        return(
            <>
                <Private />
            </>
        );
    }

    return(
        <>
            <Public />
        </>
    );

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
        verifyLogin: () => dispatch(verifyLogin())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);