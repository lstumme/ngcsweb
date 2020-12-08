import * as actionTypes from './actionTypes';
import axios from '../../server/axios-server';

//////////////////// Create ////////////////////
export const createModuleVersionStart = () => {
	return {
		type: actionTypes.CREATE_MODULEVERSION
	};
};

export const createModuleVersionSuccess = (message, moduleVersion) => {
	return {
		type: actionTypes.CREATE_MODULEVERSION_SUCCESS,
		message: message,
		moduleVersion: moduleVersion
	};
};

export const createModuleVersionFail = (error) => {
	return {
		type: actionTypes.CREATE_MODULEVERSION_FAIL,
		error: error
	};
};

export const createModuleVersion = (module, version) => {	
	return dispatch => {
		dispatch(createModuleVersionStart());
		axios.post('/createModuleVersion', { module: module, version: version })
 			.then(res => {
				dispatch(createModuleVersionSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(createModuleVersionFail(err));
			})
	};
};

//////////////////// Update ////////////////////
export const updateModuleVersionStart = () => {
	return {
		type: actionTypes.UPDATE_MODULEVERSION
	};
};

export const updateModuleVersionSuccess = (message, moduleVersion) => {
	return {
		type: actionTypes.UPDATE_MODULEVERSION_SUCCESS,
		message: message,
		moduleVersion: moduleVersion
	};
};

export const updateModuleVersionFail = (error) => {
	return {
		type: actionTypes.UPDATE_MODULEVERSION_FAIL,
		error: error
	};
};

export const updateModuleVersion = (moduleVersionId, informations, location) => {	
	return dispatch => {
		dispatch(updateModuleVersionStart());
		axios.post('/updateModuleVersion', { moduleVersionId:moduleVersionId, informations: informations, location: location })
 			.then(res => {
				dispatch(updateModuleVersionSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(updateModuleVersionFail(err));
			})
	};
};

//////////////////// Delete ////////////////////
export const deleteModuleVersionStart = () => {
	return {
		type: actionTypes.DELETE_MODULEVERSION
	};
};

export const deleteModuleVersionSuccess = (message, moduleVersion) => {
	return {
		type: actionTypes.DELETE_MODULEVERSION_SUCCESS,
		message: message,
		moduleVersionId: moduleVersionId
	};
};

export const deleteModuleVersionFail = (error) => {
	return {
		type: actionTypes.DELETE_MODULEVERSION_FAIL,
		error: error
	};
};

export const deleteModuleVersion = (moduleVersionId) => {
	return dispatch => {
		dispatch(deleteModuleVersionStart());
		axios.post('/deleteModuleVersion', { moduleVersionId: moduleVersionId })
 			.then(res => {
				dispatch(deleteModuleVersionSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(deleteModuleVersionFail(err));
			})
	};
};

//////////////////// Fetch One ////////////////////
export const fetchModuleVersionStart = () => {
	return {
		type: actionTypes.FETCH_MODULEVERSION
	};
};

export const fetchModuleVersionSuccess = (message, moduleVersion) => {
	return {
		type: actionTypes.FETCH_MODULEVERSION_SUCCESS,
		message: message,
		moduleVersion: moduleVersion
	};
};

export const fetchModuleVersionFail = (error) => {
	return {
		type: actionTypes.FETCH_MODULEVERSION_FAIL,
		error: error
	};
};

export const fetchModuleVersion = (moduleVersionId) => {
	return dispatch => {
		dispatch(fetchModuleVersionStart());
		axios.get('/getModuleVersion?moduleVersionId=' + moduleVersionId)
 			.then(res => {
				dispatch(fetchModuleVersionSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchModuleVersionFail(err));
			})
	};
};

//////////////////// Fetch Some ////////////////////
export const fetchModuleVersionsStart = () => {
	return {
		type: actionTypes.FETCH_MODULEVERSIONS
	};
};

export const fetchModuleVersionsSuccess = (message, moduleVersions) => {
	return {
		type: actionTypes.FETCH_MODULEVERSIONS_SUCCESS,
		message: message,
		moduleVersions: moduleVersions
	};
};

export const fetchModuleVersionsFail = (error) => {
	return {
		type: actionTypes.FETCH_MODULEVERSIONS_FAIL,
		error: error
	};
};

export const fetchModuleVersions = (moduleId, page, perPage) => {
	return dispatch => {
		dispatch(fetchModuleVersionsStart());
		axios.get('/getModuleVersions?moduleId=' + moduleId + '&page=' + page + '&perPage=' + perPage)
 			.then(res => {
				dispatch(fetchModuleVersionsSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchModuleVersionsFail(err));
			})
	};
};





