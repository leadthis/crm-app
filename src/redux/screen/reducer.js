const INITIAL_STATE = {loading: false};

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case "setLoading":
            return { ...state, loading: true};
        case "stopLoading":
            return { ...state, loading: false};
        default:
            return state
    }
};