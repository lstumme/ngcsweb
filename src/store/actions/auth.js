import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (userId, token) => {
    console.log('Auth Success');
    console.log('UserId : ' + userId);
    console.log('Token : ' + token);
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
    console.log('auth called');
    return dispatch => {
        dispatch(authStart());
        axios.post('https://ngcsserver.herokuapp.com/login', {login: login, password: password})
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
