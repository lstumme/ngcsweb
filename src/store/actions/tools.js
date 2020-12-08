import * as actionTypes from './actionTypes';
import axios from '../../server/axios-server';

//////////////////// Create ////////////////////
export const createToolStart = () => {
	return {
		type: actionTypes.CREATE_TOOL
	};
};

export const createToolSuccess = (message, tool) => {
	return {
		type: actionTypes.CREATE_TOOL_SUCCESS,
		message: message,
		tool: tool
	};
};

export const createToolFail = (error) => {
	return {
		type: actionTypes.CREATE_TOOL_FAIL,
		error: error
	};
};

export const createTool = (name) => {	
	return dispatch => {
		dispatch(createToolStart());
		axios.post('/createTool', { name: name })
 			.then(res => {
				dispatch(createToolSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(createToolFail(err));
			})
	};
};

//////////////////// Update ////////////////////
export const updateToolStart = () => {
	return {
		type: actionTypes.UPDATE_TOOL
	};
};

export const updateToolSuccess = (message, tool) => {
	return {
		type: actionTypes.UPDATE_TOOL_SUCCESS,
		message: message,
		tool: tool
	};
};

export const updateToolFail = (error) => {
	return {
		type: actionTypes.UPDATE_TOOL_FAIL,
		error: error
	};
};

export const updateTool = (toolId, vendor) => {	
	return dispatch => {
		dispatch(updateToolStart());
		axios.post('/updateTool', { toolId:toolId, vendor: vendor })
 			.then(res => {
				dispatch(updateToolSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(updateToolFail(err));
			})
	};
};

//////////////////// Delete ////////////////////
export const deleteToolStart = () => {
	return {
		type: actionTypes.DELETE_TOOL
	};
};

export const deleteToolSuccess = (message, tool) => {
	return {
		type: actionTypes.DELETE_TOOL_SUCCESS,
		message: message,
		toolId: toolId
	};
};

export const deleteToolFail = (error) => {
	return {
		type: actionTypes.DELETE_TOOL_FAIL,
		error: error
	};
};

export const deleteTool = (toolId) => {
	return dispatch => {
		dispatch(deleteToolStart());
		axios.post('/deleteTool', { toolId: toolId })
 			.then(res => {
				dispatch(deleteToolSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(deleteToolFail(err));
			})
	};
};

//////////////////// Fetch One ////////////////////
export const fetchToolStart = () => {
	return {
		type: actionTypes.FETCH_TOOL
	};
};

export const fetchToolSuccess = (message, tool) => {
	return {
		type: actionTypes.FETCH_TOOL_SUCCESS,
		message: message,
		tool: tool
	};
};

export const fetchToolFail = (error) => {
	return {
		type: actionTypes.FETCH_TOOL_FAIL,
		error: error
	};
};

export const fetchTool = (toolId) => {
	return dispatch => {
		dispatch(fetchToolStart());
		axios.get('/getTool?toolId=' + toolId)
 			.then(res => {
				dispatch(fetchToolSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchToolFail(err));
			})
	};
};

//////////////////// Fetch Some ////////////////////
export const fetchToolsStart = () => {
	return {
		type: actionTypes.FETCH_TOOLS
	};
};

export const fetchToolsSuccess = (message, tools) => {
	return {
		type: actionTypes.FETCH_TOOLS_SUCCESS,
		message: message,
		tools: tools
	};
};

export const fetchToolsFail = (error) => {
	return {
		type: actionTypes.FETCH_TOOLS_FAIL,
		error: error
	};
};

export const fetchTools = (page, perPage) => {
	return dispatch => {
		dispatch(fetchToolsStart());
		axios.get('/getTools?page=' + page + '&perPage=' + perPage)
 			.then(res => {
				dispatch(fetchToolsSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(fetchToolsFail(err));
			})
	};
};

//////////////////// Find Tool by Name ////////////////////
export const findToolByNameStart = () => {
	return {
		type: actionTypes.FIND_TOOL_BY_NAME
	};
};

export const findToolByNameSuccess = (message, tool) => {
	return {
		type: actionTypes.FIND_TOOL_BY_NAME_SUCCESS,
		message: message,
		tool: tool
	};
};

export const findToolByNameFail = (error) => {
	return {
		type: actionTypes.FIND_TOOL_BY_NAME_FAIL,
		error: error
	};
};

export const findToolByName = (name) => {
	return dispatch => {
		dispatch(findToolByNameStart());
		axios.get('/findToolByName?name=' + name)
 			.then(res => {
				dispatch(findToolByNameSuccess(res.data.message, res.data.data));
			})
			.catch(err => {
				dispatch(findToolByNameFail(err));
			})
	};
};





