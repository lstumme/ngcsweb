import * as actionTypes from '../actions/actionTypes';

const initialState = {
	pageCount = 0,
	users = null,
	error = null,
	loading = false,
	updatedUser = null,
	fetchedUser = null,
	userCreated = false,
	userUpdated = false,
	userDeleted = false,
};

const createUser = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			userCreated = false,
			userUpdated = false,
			userDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			userCreated = true,
			updatedUser = action.user,
		};
	},
	fail: (state, action) => {
		return {
			...state,
			loading: false,
			error: action.error
		};
	}
};

const updateUser = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			userCreated = false,
			userUpdated = false,
			userDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			userUpdated = true,
			updatedUser = action.user,
		};
	},
	fail: (state, action) => {
		return {
			...state,
			loading: false,
			error: action.error
		};
	}
};

const deleteUser = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			userCreated = false,
			userUpdated = false,
			userDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			userDeleted = true,
		};
	},
	fail: (state, action) => {
		return {
			...state,
			loading: false,
			error: action.error
		};
	}
};

const fetchUser = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			fetchedUser = action.user,
		};
	},
	fail: (state, action) => {
		return {
			...state,
			loading: false,
			error: action.error
		};
	}
};

const fetchUsers = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			fetchedUser = action.users,
			pageCount = action.pageCount,
		};
	},
	fail: (state, action) => {
		return {
			...state,
			loading: false,
			error: action.error
		};
	}
};

const updateUserPassword = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			userCreated = false,
			userUpdated = false,
			userDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			updatedUser = action.user,
			userUpdated = true,
		};
	},
	fail: (state, action) => {
		return {
			...state,
			loading: false,
			error: action.error
		};
	}
};


const findUserBylogin = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			fetchedUser = null,
		};
	},
	fail: (state, action) => {
		return {
			...state,
			loading: false,
			error: action.error
		};
	}
};

const findUserByemail = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			fetchedUser = null,
		};
	},
	fail: (state, action) => {
		return {
			...state,
			loading: false,
			error: action.error
		};
	}
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
		case actionTypes.CREATE_USER_START:
			return createUser.start(state, action);
		case actionTypes.CREATE_USER_SUCCESS:
			return createUser.success(state, action);
		case actionTypes.CREATE_USER_FAIL:
			return createUser.fail(state, action);
		
		case actionTypes.UPDATE_USER_START:
			return updateUser.start(state, action);
		case actionTypes.UPDATE_USER_SUCCESS:
			return updateUser.success(state, action);
		case actionTypes.UPDATE_USER_FAIL:
			return updateUser.fail(state, action);
		
		case actionTypes.DELETE_USER_START:
			return deleteUser.start(state, action);
		case actionTypes.DELETE_USER_SUCCESS:
			return deleteUser.success(state, action);
		case actionTypes.DELETE_USER_FAIL:
			return deleteUser.fail(state, action);
		
		case actionTypes.FETCH_USER_START:
			return fetchUser.start(state, action);
		case actionTypes.FETCH_USER_SUCCESS:
			return fetchUser.success(state, action);
		case actionTypes.FETCH_USER_FAIL:
			return fetchUser.fail(state, action);
		
		case actionTypes.FETCH_USERS_START:
			return fetchUsers.start(state, action);
		case actionTypes.FETCH_USERS_SUCCESS:
			return fetchUsers.success(state, action);
		case actionTypes.FETCH_USERS_FAIL:
			return fetchUsers.fail(state, action);
		
		case actionTypes.UPDATE_USER_PASSWORD_START:
			return updateUserPassword.start(state, action);
		case actionTypes.UPDATE_USER_PASSWORD_SUCCESS:
			return updateUserPassword.success(state, action);
		case actionTypes.UPDATE_USER_PASSWORD_FAIL:
			return updateUserPassword.fail(state, action);
		
		case actionTypes.FIND_USER_BY_LOGIN_START:
			return findUserBylogin.start(state, action);
		case actionTypes.FIND_USER_BY_LOGIN_SUCCESS:
			return findUserBylogin.success(state, action);
		case actionTypes.FIND_USER_BY_LOGIN_FAIL:
			return findUserBylogin.fail(state, action);
		
		case actionTypes.FIND_USER_BY_EMAIL_START:
			return findUserByemail.start(state, action);
		case actionTypes.FIND_USER_BY_EMAIL_SUCCESS:
			return findUserByemail.success(state, action);
		case actionTypes.FIND_USER_BY_EMAIL_FAIL:
			return findUserByemail.fail(state, action);
		
        default:
            return state;
    }
};


