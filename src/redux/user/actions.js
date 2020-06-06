const axios = require('axios').default;
const api = axios.create({baseURL: "http://crmapi.leadthis.com.br"});
export const doLogin = (email, senha) => {
    return async (dispatch) =>{
        let response;
        try{
            response = (await api.post('/usuario/login', {email, senha})).data;
            dispatch({type: 'loggedIn', data: true});
        }catch(e){
            console.log(e);
            response = e.response.data;
        }

        return response;
    };
}

export const doCadastro = (nome, email, senha) => {
    return async () => {
        let response;
        try{
            response = (await api.post('/usuario', {nome, email, senha})).data;
        }catch(e){
            response = e.response.data;
        }

        return response;
    }
}

export const verifyLogin = () => {
    return async (dispatch) => {
        const cookie = document.cookie.split("; ");

        //Verifica se tem o cookie sessionId
        dispatch({type: "loggedIn", data: !cookie.some(rx => /sessionId/g.test(rx))});
    }
}