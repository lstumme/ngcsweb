import * as actionTypes from './actionTypes';
import axios from '../../server/axios-server';

//////////////////// Create ////////////////////
export const createToolVersionStart = () => {
	return {
		type: actionTypes.CREATE_TOOLVERSION
	};
};

export const createToolVersionSuccess = (message, toolVersion) => {
	return {
		type: actionTypes.CREATE_TOOLVERSION_SUCCESS,
		message: message,
		toolVersion: toolVersion
	};
};

export const createToolVersionFail = (error) => {
	return {
		type: actionTypes.CREATE_TOOLVERSION_FAIL,
		error: error
	};
};

export const createToolVersion = (tool, version) => {	
	return dispatch => {
		dispatch(createToolVersionStart());
		axios.post('/createToolVersion', { tool: tool, version: version })
 			.then(res => {
				dispatch(createToolVersionSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(createToolVersionFail(err));
			})
	};
};

//////////////////// Update ////////////////////
export const updateToolVersionStart = () => {
	return {
		type: actionTypes.UPDATE_TOOLVERSION
	};
};

export const updateToolVersionSuccess = (message, toolVersion) => {
	return {
		type: actionTypes.UPDATE_TOOLVERSION_SUCCESS,
		message: message,
		toolVersion: toolVersion
	};
};

export const updateToolVersionFail = (error) => {
	return {
		type: actionTypes.UPDATE_TOOLVERSION_FAIL,
		error: error
	};
};

export const updateToolVersion = (toolVersionId, location, informations) => {	
	return dispatch => {
		dispatch(updateToolVersionStart());
		axios.post('/updateToolVersion', { toolVersionId:toolVersionId, location: location, informations: informations })
 			.then(res => {
				dispatch(updateToolVersionSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(updateToolVersionFail(err));
			})
	};
};

//////////////////// Delete ////////////////////
export const deleteToolVersionStart = () => {
	return {
		type: actionTypes.DELETE_TOOLVERSION
	};
};

export const deleteToolVersionSuccess = (message, toolVersion) => {
	return {
		type: actionTypes.DELETE_TOOLVERSION_SUCCESS,
		message: message,
		toolVersionId: toolVersionId
	};
};

export const deleteToolVersionFail = (error) => {
	return {
		type: actionTypes.DELETE_TOOLVERSION_FAIL,
		error: error
	};
};

export const deleteToolVersion = (toolVersionId) => {
	return dispatch => {
		dispatch(deleteToolVersionStart());
		axios.post('/deleteToolVersion', { toolVersionId: toolVersionId })
 			.then(res => {
				dispatch(deleteToolVersionSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(deleteToolVersionFail(err));
			})
	};
};

//////////////////// Fetch One ////////////////////
export const fetchToolVersionStart = () => {
	return {
		type: actionTypes.FETCH_TOOLVERSION
	};
};

export const fetchToolVersionSuccess = (message, toolVersion) => {
	return {
		type: actionTypes.FETCH_TOOLVERSION_SUCCESS,
		message: message,
		toolVersion: toolVersion
	};
};

export const fetchToolVersionFail = (error) => {
	return {
		type: actionTypes.FETCH_TOOLVERSION_FAIL,
		error: error
	};
};

export const fetchToolVersion = (toolVersionId) => {
	return dispatch => {
		dispatch(fetchToolVersionStart());
		axios.get('/getToolVersion?toolVersionId=' + toolVersionId)
 			.then(res => {
				dispatch(fetchToolVersionSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchToolVersionFail(err));
			})
	};
};

//////////////////// Fetch Some ////////////////////
export const fetchToolVersionsStart = () => {
	return {
		type: actionTypes.FETCH_TOOLVERSIONS
	};
};

export const fetchToolVersionsSuccess = (message, toolVersions) => {
	return {
		type: actionTypes.FETCH_TOOLVERSIONS_SUCCESS,
		message: message,
		toolVersions: toolVersions
	};
};

export const fetchToolVersionsFail = (error) => {
	return {
		type: actionTypes.FETCH_TOOLVERSIONS_FAIL,
		error: error
	};
};

export const fetchToolVersions = (toolId, page, perPage) => {
	return dispatch => {
		dispatch(fetchToolVersionsStart());
		axios.get('/getToolVersions?toolId=' + toolId + '&page=' + page + '&perPage=' + perPage)
 			.then(res => {
				dispatch(fetchToolVersionsSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchToolVersionsFail(err));
			})
	};
};





