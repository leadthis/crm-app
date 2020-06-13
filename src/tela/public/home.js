import React from 'react';

import {connect} from 'react-redux';

function Home(props) {

    return (
        <>
            <h1>Bem-vindo ao CRM</h1>
            <p>Para utilizá-lo faça login.</p>
        </>
    );
}

function mapStateToProps(state){
    return{}
}

function mapDispatchToProps(dispatch){
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);