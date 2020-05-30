import React from 'react';
import { connect } from 'react-redux';

import LinkWrapper from "./../patterns/linkWrapper";
import {doLogin} from './../../redux/user/actions';

function login(props) {
    const handleLogin = async (evt) => {
        evt.preventDefault();

        let email = document.getElementById('email');
        let senha = document.getElementById('password');

        let request = await props.doLogin(email.value, senha.value);
        console.log(request);
        
    };

    return (
        <div className="container">
            <div className="row m-b-none">
                <div className="col s2"></div>
                <div className="col s8">
                    <h2 className="center-align grey-text darken-4">CRM</h2>
                    <form method="post" onSubmit={handleLogin}>
                        <div className="input-field">
                            <input className="validate" type="email" name="email" id="email" />
                            <label htmlFor="email">Entre com seu e-mail</label>
                        </div>
                        <div className="input-field">
                            <input className="validate" type="password" name="password" id="password" />
                            <label htmlFor="password">Entre com sua senha</label>
                        </div>
                        <div style={{display: "flex", justifyContent: "flex-end"}}>
                            <button type="submit" className="waves-effect waves-light btn indigo">Login</button>
                        </div>
                    </form>
                    <div style={{ marginTop: 2 + 'rem' }}>
                        <LinkWrapper className="grey-text lighten-4" to="/" activeStyle={{ fontWeight: "light" }}>Esqueceu sua senha?</LinkWrapper>
                    </div>
                </div>
                <div className="col s2"></div>
            </div>
        </div>
    );
}

function mapStateToProps(state){
    return {
        login: state.user.login
    };
}

function mapDispatchToProps(dispatch){
    return {
        doLogin: (email, senha) => dispatch(doLogin(email, senha))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(login);