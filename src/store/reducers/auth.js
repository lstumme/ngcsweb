import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

const auth = {
    start: (state, action) => {
        return {
            ...state,
            loading: true,
            error: null
        }    
    },
    success: (state, action) => {
        return {
            ...state,
            loading: false,
            error: null,
            userId: action.userId,
            token: action.token
        }    
    },
    fail: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }    
    },
    logout: (state, action) => {
        return {
            ...state,
            loading: false,
            error: null,
            token: null,
            userId: null
        }    
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return auth.start(state, action);
        case actionTypes.AUTH_SUCCESS: return auth.success(state, action);
        case actionTypes.AUTH_FAIL: return auth.fail(state, action);
        case actionTypes.AUTH_DISCONNECT: return auth.logout(state, action);
        default:
            return state;
    }
};

export default reducer;