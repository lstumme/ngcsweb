import * as actionTypes from './actionTypes';
import axios from '../../server/axios-server';

export const fetchUsersStart = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    }
};

export const fetchUsersSuccess = (pageCount, users) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        pageCount: pageCount,
        users: users
    }
}

export const fetchUsersFail = () => {
    return {
        type: actionTypes.FETCH_USERS_FAIL
    }
}

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersStart());
        const page = 1;
        const perPage = 25;
        axios.get('/users?page=' + page + '&perPage=' + perPage)
             .then(result => {
                 console.log(result);
                 dispatch(fetchUsersSuccess(result.data.pageCount, result.data.users));
             })
             .catch(error => {
                 dispatch(fetchUsersFail(error));
             })
    }
}