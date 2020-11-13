import * as actionTypes from './actionTypes';
import axios from '../../server/axios-server';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (userId, token) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId: userId,
        token: token
    }
};

export const authFail = (error) => {
    console.log('Auth Fail : ' + error);
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const auth = (login, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('/login', {login: login, password: password})
            .then(result => {
                console.log(result.data.data);
                dispatch(authSuccess(result.data.data.userId, result.data.data.token));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            })
    }
};

export const logout = () => {
    axios.defaults.headers.common['Authorization'] = null;
    return {
        type: actionTypes.AUTH_DISCONNECT
    }
}
