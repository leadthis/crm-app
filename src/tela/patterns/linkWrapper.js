import React from 'react';
import {NavLink} from 'react-router-dom';

function linkWrapper(props){
    return(
        <NavLink activeStyle={{fontWeight: "bold"}} {...props}/>
    );
}

export default linkWrapper;