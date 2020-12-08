import * as actionTypes from './actionTypes';
import axios from '../../server/axios-server';

//////////////////// Create ////////////////////
export const createUserStart = () => {
	return {
		type: actionTypes.CREATE_USER
	};
};

export const createUserSuccess = (message, user) => {
	return {
		type: actionTypes.CREATE_USER_SUCCESS,
		message: message,
		user: user
	};
};

export const createUserFail = (error) => {
	return {
		type: actionTypes.CREATE_USER_FAIL,
		error: error
	};
};

export const createUser = (login, password, email, role) => {	
	return dispatch => {
		dispatch(createUserStart());
		axios.post('/createUser', { login: login, password: password, email: email, role: role })
 			.then(res => {
				dispatch(createUserSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(createUserFail(err));
			})
	};
};

//////////////////// Update ////////////////////
export const updateUserStart = () => {
	return {
		type: actionTypes.UPDATE_USER
	};
};

export const updateUserSuccess = (message, user) => {
	return {
		type: actionTypes.UPDATE_USER_SUCCESS,
		message: message,
		user: user
	};
};

export const updateUserFail = (error) => {
	return {
		type: actionTypes.UPDATE_USER_FAIL,
		error: error
	};
};

export const updateUser = (userId, firstname, lastname, avatar, role) => {	
	return dispatch => {
		dispatch(updateUserStart());
		axios.post('/updateUser', { userId:userId, firstname: firstname, lastname: lastname, avatar: avatar, role: role })
 			.then(res => {
				dispatch(updateUserSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(updateUserFail(err));
			})
	};
};

//////////////////// Delete ////////////////////
export const deleteUserStart = () => {
	return {
		type: actionTypes.DELETE_USER
	};
};

export const deleteUserSuccess = (message, user) => {
	return {
		type: actionTypes.DELETE_USER_SUCCESS,
		message: message,
		userId: userId
	};
};

export const deleteUserFail = (error) => {
	return {
		type: actionTypes.DELETE_USER_FAIL,
		error: error
	};
};

export const deleteUser = (userId) => {
	return dispatch => {
		dispatch(deleteUserStart());
		axios.post('/deleteUser', { userId: userId })
 			.then(res => {
				dispatch(deleteUserSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(deleteUserFail(err));
			})
	};
};

//////////////////// Fetch One ////////////////////
export const fetchUserStart = () => {
	return {
		type: actionTypes.FETCH_USER
	};
};

export const fetchUserSuccess = (message, user) => {
	return {
		type: actionTypes.FETCH_USER_SUCCESS,
		message: message,
		user: user
	};
};

export const fetchUserFail = (error) => {
	return {
		type: actionTypes.FETCH_USER_FAIL,
		error: error
	};
};

export const fetchUser = (userId) => {
	return dispatch => {
		dispatch(fetchUserStart());
		axios.get('/getUser?userId=' + userId)
 			.then(res => {
				dispatch(fetchUserSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchUserFail(err));
			})
	};
};

//////////////////// Fetch Some ////////////////////
export const fetchUsersStart = () => {
	return {
		type: actionTypes.FETCH_USERS
	};
};

export const fetchUsersSuccess = (message, users) => {
	return {
		type: actionTypes.FETCH_USERS_SUCCESS,
		message: message,
		users: users
	};
};

export const fetchUsersFail = (error) => {
	return {
		type: actionTypes.FETCH_USERS_FAIL,
		error: error
	};
};

export const fetchUsers = (page, perPage) => {
	return dispatch => {
		dispatch(fetchUsersStart());
		axios.get('/getUsers?page=' + page + '&perPage=' + perPage)
 			.then(res => {
				dispatch(fetchUsersSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchUsersFail(err));
			})
	};
};

//////////////////// Update User Password ////////////////////
export const updateUserPasswordStart = () => {
	return {
		type: actionTypes.UPDATE_USER_PASSWORD
	};
};

export const updateUserPasswordSuccess = (message, user) => {
	return {
		type: actionTypes.UPDATE_USER_PASSWORD_SUCCESS,
		message: message,
		user: user
	};
};

export const updateUserPasswordFail = (error) => {
	return {
		type: actionTypes.UPDATE_USER_PASSWORD_FAIL,
		error: error
	};
};

export const updateUserPassword = (userId, newPassword) => {
	return dispatch => {
		dispatch(updateUserPasswordStart());
		axios.post('/updateUserPassword', { userId: userId, newPassword: newPassword })
 			.then(res => {
				dispatch(updateUserPasswordSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(updateUserPasswordFail(err));
			})
	};
};

//////////////////// Find User by Login ////////////////////
export const findUserByLoginStart = () => {
	return {
		type: actionTypes.FIND_USER_BY_LOGIN
	};
};

export const findUserByLoginSuccess = (message, user) => {
	return {
		type: actionTypes.FIND_USER_BY_LOGIN_SUCCESS,
		message: message,
		user: user
	};
};

export const findUserByLoginFail = (error) => {
	return {
		type: actionTypes.FIND_USER_BY_LOGIN_FAIL,
		error: error
	};
};

export const findUserByLogin = (login) => {
	return dispatch => {
		dispatch(findUserByLoginStart());
		axios.get('/findUserByLogin?login=' + login)
 			.then(res => {
				dispatch(findUserByLoginSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(findUserByLoginFail(err));
			})
	};
};

//////////////////// Find User by Email ////////////////////
export const findUserByEmailStart = () => {
	return {
		type: actionTypes.FIND_USER_BY_EMAIL
	};
};

export const findUserByEmailSuccess = (message, user) => {
	return {
		type: actionTypes.FIND_USER_BY_EMAIL_SUCCESS,
		message: message,
		user: user
	};
};

export const findUserByEmailFail = (error) => {
	return {
		type: actionTypes.FIND_USER_BY_EMAIL_FAIL,
		error: error
	};
};

export const findUserByEmail = (email) => {
	return dispatch => {
		dispatch(findUserByEmailStart());
		axios.get('/findUserByEmail?email=' + email)
 			.then(res => {
				dispatch(findUserByEmailSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(findUserByEmailFail(err));
			})
	};
};





