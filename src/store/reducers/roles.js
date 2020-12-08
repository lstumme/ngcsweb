import * as actionTypes from '../actions/actionTypes';

const initialState = {
	pageCount = 0,
	roles = null,
	error = null,
	loading = false,
	updatedRole = null,
	fetchedRole = null,
	roleCreated = false,
	roleUpdated = false,
	roleDeleted = false,
};

const createRole = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			roleCreated = false,
			roleUpdated = false,
			roleDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			roleCreated = true,
			updatedRole = action.role,
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

const deleteRole = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			roleCreated = false,
			roleUpdated = false,
			roleDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			roleDeleted = true,
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

const fetchRole = {
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
			fetchedRole = action.role,
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

const fetchRoles = {
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
			fetchedRole = action.roles,
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


const findRoleByname = {
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
			fetchedRole = null,
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

const findRoleBylabel = {
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
			fetchedRole = null,
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

const addSubRoleToRole = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			roleCreated = false,
			roleUpdated = false,
			roleDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			roleUpdated = true,
			updatedRole = action.role,
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

const removeSubRoleFromRole = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			roleCreated = false,
			roleUpdated = false,
			roleDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			roleUpdated = true,
			updatedRole = action.role,
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
		case actionTypes.CREATE_ROLE_START:
			return createRole.start(state, action);
		case actionTypes.CREATE_ROLE_SUCCESS:
			return createRole.success(state, action);
		case actionTypes.CREATE_ROLE_FAIL:
			return createRole.fail(state, action);
		
		case actionTypes.DELETE_ROLE_START:
			return deleteRole.start(state, action);
		case actionTypes.DELETE_ROLE_SUCCESS:
			return deleteRole.success(state, action);
		case actionTypes.DELETE_ROLE_FAIL:
			return deleteRole.fail(state, action);
		
		case actionTypes.FETCH_ROLE_START:
			return fetchRole.start(state, action);
		case actionTypes.FETCH_ROLE_SUCCESS:
			return fetchRole.success(state, action);
		case actionTypes.FETCH_ROLE_FAIL:
			return fetchRole.fail(state, action);
		
		case actionTypes.FETCH_ROLES_START:
			return fetchRoles.start(state, action);
		case actionTypes.FETCH_ROLES_SUCCESS:
			return fetchRoles.success(state, action);
		case actionTypes.FETCH_ROLES_FAIL:
			return fetchRoles.fail(state, action);
		
		case actionTypes.FIND_ROLE_BY_NAME_START:
			return findRoleByname.start(state, action);
		case actionTypes.FIND_ROLE_BY_NAME_SUCCESS:
			return findRoleByname.success(state, action);
		case actionTypes.FIND_ROLE_BY_NAME_FAIL:
			return findRoleByname.fail(state, action);
		
		case actionTypes.FIND_ROLE_BY_LABEL_START:
			return findRoleBylabel.start(state, action);
		case actionTypes.FIND_ROLE_BY_LABEL_SUCCESS:
			return findRoleBylabel.success(state, action);
		case actionTypes.FIND_ROLE_BY_LABEL_FAIL:
			return findRoleBylabel.fail(state, action);
		
		case actionTypes.ADD_SUBROLE_TO_ROLE_START:
			return addSubRoleToRole.start(state, action);
		case actionTypes.ADD_SUBROLE_TO_ROLE_SUCCESS:
			return addSubRoleToRole.success(state, action);
		case actionTypes.ADD_SUBROLE_TO_ROLE_FAIL:
			return addSubRoleToRole.fail(state, action);
		
		case actionTypes.REMOVE_SUBROLE_FROM_ROLE_START:
			return removeSubRoleFromRole.start(state, action);
		case actionTypes.REMOVE_SUBROLE_FROM_ROLE_SUCCESS:
			return removeSubRoleFromRole.success(state, action);
		case actionTypes.REMOVE_SUBROLE_FROM_ROLE_FAIL:
			return removeSubRoleFromRole.fail(state, action);
		
        default:
            return state;
    }
};


