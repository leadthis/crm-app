import React from 'react';
import {connect} from 'react-redux';

import {doCadastro} from './../../redux/user/actions';
import M from 'materialize-css/dist/js/materialize.min';

const cadastrar = props => {
    const handleCadastro = async evt => {
        evt.preventDefault();

        const nome = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const result = await props.doCadastro(nome, email, password);

        if(result.errors.length <= 0){
            M.toast({html: result.msg});
            setTimeout(() => {props.history.push('/login')}, 3000);
        }else
            M.toast({html: result.errors[0].msg});


    }

    return(
        <div className="container">
            <div className="row m-b-none">
                <div className="col s2"></div>
                <div className="col s8">
                    <h2 className="center-align grey-text darken-4" style={{textTransform: "uppercase"}}>CRM - Cadastro</h2>
                    <form method="post" onSubmit={handleCadastro}>
                        <div className="input-field">
                            <input className="validate" type="text" name="name" id="name" />
                            <label htmlFor="name">Entre com seu nome</label>
                        </div>
                        <div className="input-field">
                            <input className="validate" type="email" name="email" id="email" />
                            <label htmlFor="email">Entre com seu e-mail</label>
                        </div>
                        <div className="input-field">
                            <input className="validate" type="password" name="password" id="password" />
                            <label htmlFor="password">Entre com sua senha</label>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <button type="button" className="waves-effect waves-light btn indigo" onClick={() => {props.history.push('/login')}}>Voltar para login</button>
                            <button type="submit" className="waves-effect waves-light btn green">Cadastrar</button>
                        </div>
                    </form>
                </div>
                <div className="col s2"></div>
            </div>
        </div>
    );
}

function mapStateToProps(state){
    return{};
}

function mapDispatchToProps(dispatch){
    return{
        doCadastro: (nome, email, senha) => dispatch(doCadastro(nome, email, senha))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cadastrar);