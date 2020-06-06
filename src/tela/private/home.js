import React from 'react';

import {connect} from 'react-redux';

const Home = (props) => {
    return(
        <h1>Logado!!</h1>
    );
}

function mapStateToProps(state){
    return{}
}

function mapDispatchToProps(state){
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);