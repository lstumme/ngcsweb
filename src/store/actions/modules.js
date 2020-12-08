import * as actionTypes from './actionTypes';
import axios from '../../server/axios-server';

//////////////////// Create ////////////////////
export const createModuleStart = () => {
	return {
		type: actionTypes.CREATE_MODULE
	};
};

export const createModuleSuccess = (message, module) => {
	return {
		type: actionTypes.CREATE_MODULE_SUCCESS,
		message: message,
		module: module
	};
};

export const createModuleFail = (error) => {
	return {
		type: actionTypes.CREATE_MODULE_FAIL,
		error: error
	};
};

export const createModule = (name, tool) => {	
	return dispatch => {
		dispatch(createModuleStart());
		axios.post('/createModule', { name: name, tool: tool })
 			.then(res => {
				dispatch(createModuleSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(createModuleFail(err));
			})
	};
};

//////////////////// Update ////////////////////
export const updateModuleStart = () => {
	return {
		type: actionTypes.UPDATE_MODULE
	};
};

export const updateModuleSuccess = (message, module) => {
	return {
		type: actionTypes.UPDATE_MODULE_SUCCESS,
		message: message,
		module: module
	};
};

export const updateModuleFail = (error) => {
	return {
		type: actionTypes.UPDATE_MODULE_FAIL,
		error: error
	};
};

export const updateModule = (moduleId, informations, vendor) => {	
	return dispatch => {
		dispatch(updateModuleStart());
		axios.post('/updateModule', { moduleId:moduleId, informations: informations, vendor: vendor })
 			.then(res => {
				dispatch(updateModuleSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(updateModuleFail(err));
			})
	};
};

//////////////////// Delete ////////////////////
export const deleteModuleStart = () => {
	return {
		type: actionTypes.DELETE_MODULE
	};
};

export const deleteModuleSuccess = (message, module) => {
	return {
		type: actionTypes.DELETE_MODULE_SUCCESS,
		message: message,
		moduleId: moduleId
	};
};

export const deleteModuleFail = (error) => {
	return {
		type: actionTypes.DELETE_MODULE_FAIL,
		error: error
	};
};

export const deleteModule = (moduleId) => {
	return dispatch => {
		dispatch(deleteModuleStart());
		axios.post('/deleteModule', { moduleId: moduleId })
 			.then(res => {
				dispatch(deleteModuleSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(deleteModuleFail(err));
			})
	};
};

//////////////////// Fetch One ////////////////////
export const fetchModuleStart = () => {
	return {
		type: actionTypes.FETCH_MODULE
	};
};

export const fetchModuleSuccess = (message, module) => {
	return {
		type: actionTypes.FETCH_MODULE_SUCCESS,
		message: message,
		module: module
	};
};

export const fetchModuleFail = (error) => {
	return {
		type: actionTypes.FETCH_MODULE_FAIL,
		error: error
	};
};

export const fetchModule = (moduleId) => {
	return dispatch => {
		dispatch(fetchModuleStart());
		axios.get('/getModule?moduleId=' + moduleId)
 			.then(res => {
				dispatch(fetchModuleSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchModuleFail(err));
			})
	};
};

//////////////////// Fetch Some ////////////////////
export const fetchModulesStart = () => {
	return {
		type: actionTypes.FETCH_MODULES
	};
};

export const fetchModulesSuccess = (message, modules) => {
	return {
		type: actionTypes.FETCH_MODULES_SUCCESS,
		message: message,
		modules: modules
	};
};

export const fetchModulesFail = (error) => {
	return {
		type: actionTypes.FETCH_MODULES_FAIL,
		error: error
	};
};

export const fetchModules = (toolId, page, perPage) => {
	return dispatch => {
		dispatch(fetchModulesStart());
		axios.get('/getModules?toolId=' + toolId + '&page=' + page + '&perPage=' + perPage)
 			.then(res => {
				dispatch(fetchModulesSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchModulesFail(err));
			})
	};
};

//////////////////// Find Module by Name ////////////////////
export const findModuleByNameStart = () => {
	return {
		type: actionTypes.FIND_MODULE_BY_NAME
	};
};

export const findModuleByNameSuccess = (message, module) => {
	return {
		type: actionTypes.FIND_MODULE_BY_NAME_SUCCESS,
		message: message,
		module: module
	};
};

export const findModuleByNameFail = (error) => {
	return {
		type: actionTypes.FIND_MODULE_BY_NAME_FAIL,
		error: error
	};
};

export const findModuleByName = (name) => {
	return dispatch => {
		dispatch(findModuleByNameStart());
		axios.get('/findModuleByName?name=' + name)
 			.then(res => {
				dispatch(findModuleByNameSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(findModuleByNameFail(err));
			})
	};
};





