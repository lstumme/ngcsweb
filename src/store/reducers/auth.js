import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

const authStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    }
}

const authSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        error: null,
        userId: action.userId,
        token: action.token
    }
}

const authFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}

const logout = (state, action) => {
    return {
        ...state,
        loading: false,
        error: null,
        token: null,
        userId: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_DISCONNECT: return logout(state, action);
        default:
            return state;
    }
};

export default reducer;