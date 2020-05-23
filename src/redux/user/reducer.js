const INITIAL_STATE = {login: false};

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case "setLogin":
            return { ...state, login: true};
        case "setLogout":
            return { ...state, login: false};
        default:
            return state;
    }
}