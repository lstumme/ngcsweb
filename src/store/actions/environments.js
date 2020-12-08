import * as actionTypes from './actionTypes';
import axios from '../../server/axios-server';

//////////////////// Create ////////////////////
export const createEnvironmentStart = () => {
	return {
		type: actionTypes.CREATE_ENVIRONMENT
	};
};

export const createEnvironmentSuccess = (message, environment) => {
	return {
		type: actionTypes.CREATE_ENVIRONMENT_SUCCESS,
		message: message,
		environment: environment
	};
};

export const createEnvironmentFail = (error) => {
	return {
		type: actionTypes.CREATE_ENVIRONMENT_FAIL,
		error: error
	};
};

export const createEnvironment = (name) => {	
	return dispatch => {
		dispatch(createEnvironmentStart());
		axios.post('/createEnvironment', { name: name })
 			.then(res => {
				dispatch(createEnvironmentSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(createEnvironmentFail(err));
			})
	};
};

//////////////////// Update ////////////////////
export const updateEnvironmentStart = () => {
	return {
		type: actionTypes.UPDATE_ENVIRONMENT
	};
};

export const updateEnvironmentSuccess = (message, environment) => {
	return {
		type: actionTypes.UPDATE_ENVIRONMENT_SUCCESS,
		message: message,
		environment: environment
	};
};

export const updateEnvironmentFail = (error) => {
	return {
		type: actionTypes.UPDATE_ENVIRONMENT_FAIL,
		error: error
	};
};

export const updateEnvironment = (environmentId, informations) => {	
	return dispatch => {
		dispatch(updateEnvironmentStart());
		axios.post('/updateEnvironment', { environmentId:environmentId, informations: informations })
 			.then(res => {
				dispatch(updateEnvironmentSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(updateEnvironmentFail(err));
			})
	};
};

//////////////////// Delete ////////////////////
export const deleteEnvironmentStart = () => {
	return {
		type: actionTypes.DELETE_ENVIRONMENT
	};
};

export const deleteEnvironmentSuccess = (message, environment) => {
	return {
		type: actionTypes.DELETE_ENVIRONMENT_SUCCESS,
		message: message,
		environmentId: environmentId
	};
};

export const deleteEnvironmentFail = (error) => {
	return {
		type: actionTypes.DELETE_ENVIRONMENT_FAIL,
		error: error
	};
};

export const deleteEnvironment = (environmentId) => {
	return dispatch => {
		dispatch(deleteEnvironmentStart());
		axios.post('/deleteEnvironment', { environmentId: environmentId })
 			.then(res => {
				dispatch(deleteEnvironmentSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(deleteEnvironmentFail(err));
			})
	};
};

//////////////////// Fetch One ////////////////////
export const fetchEnvironmentStart = () => {
	return {
		type: actionTypes.FETCH_ENVIRONMENT
	};
};

export const fetchEnvironmentSuccess = (message, environment) => {
	return {
		type: actionTypes.FETCH_ENVIRONMENT_SUCCESS,
		message: message,
		environment: environment
	};
};

export const fetchEnvironmentFail = (error) => {
	return {
		type: actionTypes.FETCH_ENVIRONMENT_FAIL,
		error: error
	};
};

export const fetchEnvironment = (environmentId) => {
	return dispatch => {
		dispatch(fetchEnvironmentStart());
		axios.get('/getEnvironment?environmentId=' + environmentId)
 			.then(res => {
				dispatch(fetchEnvironmentSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchEnvironmentFail(err));
			})
	};
};

//////////////////// Fetch Some ////////////////////
export const fetchEnvironmentsStart = () => {
	return {
		type: actionTypes.FETCH_ENVIRONMENTS
	};
};

export const fetchEnvironmentsSuccess = (message, environments) => {
	return {
		type: actionTypes.FETCH_ENVIRONMENTS_SUCCESS,
		message: message,
		environments: environments
	};
};

export const fetchEnvironmentsFail = (error) => {
	return {
		type: actionTypes.FETCH_ENVIRONMENTS_FAIL,
		error: error
	};
};

export const fetchEnvironments = (page, perPage) => {
	return dispatch => {
		dispatch(fetchEnvironmentsStart());
		axios.get('/getEnvironments?page=' + page + '&perPage=' + perPage)
 			.then(res => {
				dispatch(fetchEnvironmentsSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchEnvironmentsFail(err));
			})
	};
};

//////////////////// Find Environment by Name ////////////////////
export const findEnvironmentByNameStart = () => {
	return {
		type: actionTypes.FIND_ENVIRONMENT_BY_NAME
	};
};

export const findEnvironmentByNameSuccess = (message, environment) => {
	return {
		type: actionTypes.FIND_ENVIRONMENT_BY_NAME_SUCCESS,
		message: message,
		environment: environment
	};
};

export const findEnvironmentByNameFail = (error) => {
	return {
		type: actionTypes.FIND_ENVIRONMENT_BY_NAME_FAIL,
		error: error
	};
};

export const findEnvironmentByName = (name) => {
	return dispatch => {
		dispatch(findEnvironmentByNameStart());
		axios.get('/findEnvironmentByName?name=' + name)
 			.then(res => {
				dispatch(findEnvironmentByNameSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(findEnvironmentByNameFail(err));
			})
	};
};




//////////////////// Add ModuleVersion to Environment ////////////////////
export const addModuleVersionToEnvironmentStart = () => {
	return {
		type: actionTypes.ADD_MODULEVERSION_TO_ENVIRONMENT_START
	};
};

export const addModuleVersionToEnvironmentSuccess = (message, environment) => {
	return {
		type: actionTypes.ADD_MODULEVERSION_TO_ENVIRONMENT_SUCCESS,
		message: message,
		environment: environment
	};
};

export const addModuleVersionToEnvironmentFail = (error) => {
	return {
		type: actionTypes.ADD_MODULEVERSION_TO_ENVIRONMENT_FAIL,
		error: error
	};
};

export const addModuleVersionToEnvironment = (environmentId, moduleVersionId) => {
	return dispatch => {
		dispatch(addModuleVersionToEnvironmentStart());
		axios.post('/addModuleVersionToEnvironment', { environmentId: environmentId, moduleVersionId: moduleVersionId})
 			.then(res => {
				dispatch(addModuleVersionToEnvironmentSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(addModuleVersionToEnvironmentFail(err));
			})
	};
};

//////////////////// Remove ModuleVersion from Environment ////////////////////
export const removeModuleVersionFromEnvironmentStart = () => {
	return {
		type: actionTypes.REMOVE_MODULEVERSION_FROM_ENVIRONMENT_START
	};
};

export const removeModuleVersionFromEnvironmentSuccess = (message, environment) => {
	return {
		type: actionTypes.REMOVE_MODULEVERSION_FROM_ENVIRONMENT_SUCCESS,
		message: message,
		environment: environment
	};
};

export const removeModuleVersionFromEnvironmentFail = (error) => {
	return {
		type: actionTypes.REMOVE_MODULEVERSION_FROM_ENVIRONMENT_FAIL,
		error: error
	};
};

export const removeModuleVersionFromEnvironment = (environmentId, moduleVersionId) => {
	return dispatch => {
		dispatch(removeModuleVersionFromEnvironmentStart());
		axios.post('/removeModuleVersionFromEnvironment', { environmentId: environmentId, moduleVersionId: moduleVersionId})
 			.then(res => {
				dispatch(removeModuleVersionFromEnvironmentSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(removeModuleVersionFromEnvironmentFail(err));
			})
	};
};

//////////////////// Add ToolVersion to Environment ////////////////////
export const addToolVersionToEnvironmentStart = () => {
	return {
		type: actionTypes.ADD_TOOLVERSION_TO_ENVIRONMENT_START
	};
};

export const addToolVersionToEnvironmentSuccess = (message, environment) => {
	return {
		type: actionTypes.ADD_TOOLVERSION_TO_ENVIRONMENT_SUCCESS,
		message: message,
		environment: environment
	};
};

export const addToolVersionToEnvironmentFail = (error) => {
	return {
		type: actionTypes.ADD_TOOLVERSION_TO_ENVIRONMENT_FAIL,
		error: error
	};
};

export const addToolVersionToEnvironment = (environmentId, toolVersionId) => {
	return dispatch => {
		dispatch(addToolVersionToEnvironmentStart());
		axios.post('/addToolVersionToEnvironment', { environmentId: environmentId, toolVersionId: toolVersionId})
 			.then(res => {
				dispatch(addToolVersionToEnvironmentSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(addToolVersionToEnvironmentFail(err));
			})
	};
};

//////////////////// Remove ToolVersion from Environment ////////////////////
export const removeToolVersionFromEnvironmentStart = () => {
	return {
		type: actionTypes.REMOVE_TOOLVERSION_FROM_ENVIRONMENT_START
	};
};

export const removeToolVersionFromEnvironmentSuccess = (message, environment) => {
	return {
		type: actionTypes.REMOVE_TOOLVERSION_FROM_ENVIRONMENT_SUCCESS,
		message: message,
		environment: environment
	};
};

export const removeToolVersionFromEnvironmentFail = (error) => {
	return {
		type: actionTypes.REMOVE_TOOLVERSION_FROM_ENVIRONMENT_FAIL,
		error: error
	};
};

export const removeToolVersionFromEnvironment = (environmentId, toolVersionId) => {
	return dispatch => {
		dispatch(removeToolVersionFromEnvironmentStart());
		axios.post('/removeToolVersionFromEnvironment', { environmentId: environmentId, toolVersionId: toolVersionId})
 			.then(res => {
				dispatch(removeToolVersionFromEnvironmentSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(removeToolVersionFromEnvironmentFail(err));
			})
	};
};


