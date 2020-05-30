import React from 'react';

import LinkWrapper from "./linkWrapper";

function header(){
    return(
        <nav className="grey darken-4">
            <div className="nav-wrapper">
                <LinkWrapper to="/" className="brand-logo">
                    <img src="https://cdn2.iconfinder.com/data/icons/green-2/32/expand-color-web2-21-512.png" width='65' alt="Logo"/>
                </LinkWrapper>
                <ul className="right hide-on-med-and-down">
                    <li><LinkWrapper to="/login">Login</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    );
}

export default header;