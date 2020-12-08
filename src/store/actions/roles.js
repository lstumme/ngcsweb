import * as actionTypes from './actionTypes';
import axios from '../../server/axios-server';

//////////////////// Create ////////////////////
export const createRoleStart = () => {
	return {
		type: actionTypes.CREATE_ROLE
	};
};

export const createRoleSuccess = (message, role) => {
	return {
		type: actionTypes.CREATE_ROLE_SUCCESS,
		message: message,
		role: role
	};
};

export const createRoleFail = (error) => {
	return {
		type: actionTypes.CREATE_ROLE_FAIL,
		error: error
	};
};

export const createRole = (name, label) => {	
	return dispatch => {
		dispatch(createRoleStart());
		axios.post('/createRole', { name: name, label: label })
 			.then(res => {
				dispatch(createRoleSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(createRoleFail(err));
			})
	};
};

//////////////////// Delete ////////////////////
export const deleteRoleStart = () => {
	return {
		type: actionTypes.DELETE_ROLE
	};
};

export const deleteRoleSuccess = (message, role) => {
	return {
		type: actionTypes.DELETE_ROLE_SUCCESS,
		message: message,
		roleId: roleId
	};
};

export const deleteRoleFail = (error) => {
	return {
		type: actionTypes.DELETE_ROLE_FAIL,
		error: error
	};
};

export const deleteRole = (roleId) => {
	return dispatch => {
		dispatch(deleteRoleStart());
		axios.post('/deleteRole', { roleId: roleId })
 			.then(res => {
				dispatch(deleteRoleSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(deleteRoleFail(err));
			})
	};
};

//////////////////// Fetch One ////////////////////
export const fetchRoleStart = () => {
	return {
		type: actionTypes.FETCH_ROLE
	};
};

export const fetchRoleSuccess = (message, role) => {
	return {
		type: actionTypes.FETCH_ROLE_SUCCESS,
		message: message,
		role: role
	};
};

export const fetchRoleFail = (error) => {
	return {
		type: actionTypes.FETCH_ROLE_FAIL,
		error: error
	};
};

export const fetchRole = (roleId) => {
	return dispatch => {
		dispatch(fetchRoleStart());
		axios.get('/getRole?roleId=' + roleId)
 			.then(res => {
				dispatch(fetchRoleSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchRoleFail(err));
			})
	};
};

//////////////////// Fetch Some ////////////////////
export const fetchRolesStart = () => {
	return {
		type: actionTypes.FETCH_ROLES
	};
};

export const fetchRolesSuccess = (message, roles) => {
	return {
		type: actionTypes.FETCH_ROLES_SUCCESS,
		message: message,
		roles: roles
	};
};

export const fetchRolesFail = (error) => {
	return {
		type: actionTypes.FETCH_ROLES_FAIL,
		error: error
	};
};

export const fetchRoles = (page, perPage) => {
	return dispatch => {
		dispatch(fetchRolesStart());
		axios.get('/getRoles?page=' + page + '&perPage=' + perPage)
 			.then(res => {
				dispatch(fetchRolesSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchRolesFail(err));
			})
	};
};

//////////////////// Find Role by Name ////////////////////
export const findRoleByNameStart = () => {
	return {
		type: actionTypes.FIND_ROLE_BY_NAME
	};
};

export const findRoleByNameSuccess = (message, role) => {
	return {
		type: actionTypes.FIND_ROLE_BY_NAME_SUCCESS,
		message: message,
		role: role
	};
};

export const findRoleByNameFail = (error) => {
	return {
		type: actionTypes.FIND_ROLE_BY_NAME_FAIL,
		error: error
	};
};

export const findRoleByName = (name) => {
	return dispatch => {
		dispatch(findRoleByNameStart());
		axios.get('/findRoleByName?name=' + name)
 			.then(res => {
				dispatch(findRoleByNameSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(findRoleByNameFail(err));
			})
	};
};

//////////////////// Find Role by Label ////////////////////
export const findRoleByLabelStart = () => {
	return {
		type: actionTypes.FIND_ROLE_BY_LABEL
	};
};

export const findRoleByLabelSuccess = (message, role) => {
	return {
		type: actionTypes.FIND_ROLE_BY_LABEL_SUCCESS,
		message: message,
		role: role
	};
};

export const findRoleByLabelFail = (error) => {
	return {
		type: actionTypes.FIND_ROLE_BY_LABEL_FAIL,
		error: error
	};
};

export const findRoleByLabel = (label) => {
	return dispatch => {
		dispatch(findRoleByLabelStart());
		axios.get('/findRoleByLabel?label=' + label)
 			.then(res => {
				dispatch(findRoleByLabelSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(findRoleByLabelFail(err));
			})
	};
};




//////////////////// Add SubRole to Role ////////////////////
export const addSubRoleToRoleStart = () => {
	return {
		type: actionTypes.ADD_SUBROLE_TO_ROLE_START
	};
};

export const addSubRoleToRoleSuccess = (message, role) => {
	return {
		type: actionTypes.ADD_SUBROLE_TO_ROLE_SUCCESS,
		message: message,
		role: role
	};
};

export const addSubRoleToRoleFail = (error) => {
	return {
		type: actionTypes.ADD_SUBROLE_TO_ROLE_FAIL,
		error: error
	};
};

export const addSubRoleToRole = (roleId, subRoleId) => {
	return dispatch => {
		dispatch(addSubRoleToRoleStart());
		axios.post('/addSubRoleToRole', { roleId: roleId, subRoleId: subRoleId})
 			.then(res => {
				dispatch(addSubRoleToRoleSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(addSubRoleToRoleFail(err));
			})
	};
};

//////////////////// Remove SubRole from Role ////////////////////
export const removeSubRoleFromRoleStart = () => {
	return {
		type: actionTypes.REMOVE_SUBROLE_FROM_ROLE_START
	};
};

export const removeSubRoleFromRoleSuccess = (message, role) => {
	return {
		type: actionTypes.REMOVE_SUBROLE_FROM_ROLE_SUCCESS,
		message: message,
		role: role
	};
};

export const removeSubRoleFromRoleFail = (error) => {
	return {
		type: actionTypes.REMOVE_SUBROLE_FROM_ROLE_FAIL,
		error: error
	};
};

export const removeSubRoleFromRole = (roleId, subRoleId) => {
	return dispatch => {
		dispatch(removeSubRoleFromRoleStart());
		axios.post('/removeSubRoleFromRole', { roleId: roleId, subRoleId: subRoleId})
 			.then(res => {
				dispatch(removeSubRoleFromRoleSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(removeSubRoleFromRoleFail(err));
			})
	};
};


