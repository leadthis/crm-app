const axios = require('axios').default;
const api = axios.create({baseURL: "http://crmapi.leadthis.com.br"});
export const doLogin = (email, senha) => {
    return async (dispatch) =>{
        let response;
        console.log(email, senha);
        try{
            response = (await api.post('/usuario/login', {email, senha})).data;
        }catch(e){
            response = e.response.data;
        }

        return response;
    };
}