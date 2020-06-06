import React from 'react';
import { connect } from 'react-redux';

import {doLogin} from './../../redux/user/actions';

function login(props) {
    const handleLogin = async (evt) => {
        evt.preventDefault();

        const email = document.getElementById('email');
        const senha = document.getElementById('password');

        const request = await props.doLogin(email.value, senha.value);
        
        document.cookie = "sessionId=" + request.data.sid + "; path=/";
    }

    return (
        <div className="container">
            <div className="row m-b-none">
                <div className="col s2"></div>
                <div className="col s8">
                    <h2 className="center-align grey-text darken-4" style={{textTransform: "uppercase"}}>CRM - Login</h2>
                    <form method="post" onSubmit={handleLogin}>
                        <div className="input-field">
                            <input className="validate" type="email" name="email" id="email" />
                            <label htmlFor="email">Entre com seu e-mail</label>
                        </div>
                        <div className="input-field">
                            <input className="validate" type="password" name="password" id="password" />
                            <label htmlFor="password">Entre com sua senha</label>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <button type="button" className="waves-effect waves-light btn indigo" onClick={() => {props.history.push('/cadastrar')}}>Cadastrar</button>
                            <button type="submit" className="waves-effect waves-light btn green">Login</button>
                        </div>
                    </form>
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
        doLogin: async (email, senha) => dispatch(await doLogin(email, senha))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(login);