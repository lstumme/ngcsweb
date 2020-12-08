import * as actionTypes from '../actions/actionTypes';

const initialState = {
	pageCount = 0,
	tools = null,
	error = null,
	loading = false,
	updatedTool = null,
	fetchedTool = null,
	toolCreated = false,
	toolUpdated = false,
	toolDeleted = false,
};

const createTool = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			toolCreated = false,
			toolUpdated = false,
			toolDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			toolCreated = true,
			updatedTool = action.tool,
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

const updateTool = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			toolCreated = false,
			toolUpdated = false,
			toolDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			toolUpdated = true,
			updatedTool = action.tool,
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

const deleteTool = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			toolCreated = false,
			toolUpdated = false,
			toolDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			toolDeleted = true,
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

const fetchTool = {
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
			fetchedTool = action.tool,
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

const fetchTools = {
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
			fetchedTool = action.tools,
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


const findToolByname = {
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
			fetchedTool = null,
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
		case actionTypes.CREATE_TOOL_START:
			return createTool.start(state, action);
		case actionTypes.CREATE_TOOL_SUCCESS:
			return createTool.success(state, action);
		case actionTypes.CREATE_TOOL_FAIL:
			return createTool.fail(state, action);
		
		case actionTypes.UPDATE_TOOL_START:
			return updateTool.start(state, action);
		case actionTypes.UPDATE_TOOL_SUCCESS:
			return updateTool.success(state, action);
		case actionTypes.UPDATE_TOOL_FAIL:
			return updateTool.fail(state, action);
		
		case actionTypes.DELETE_TOOL_START:
			return deleteTool.start(state, action);
		case actionTypes.DELETE_TOOL_SUCCESS:
			return deleteTool.success(state, action);
		case actionTypes.DELETE_TOOL_FAIL:
			return deleteTool.fail(state, action);
		
		case actionTypes.FETCH_TOOL_START:
			return fetchTool.start(state, action);
		case actionTypes.FETCH_TOOL_SUCCESS:
			return fetchTool.success(state, action);
		case actionTypes.FETCH_TOOL_FAIL:
			return fetchTool.fail(state, action);
		
		case actionTypes.FETCH_TOOLS_START:
			return fetchTools.start(state, action);
		case actionTypes.FETCH_TOOLS_SUCCESS:
			return fetchTools.success(state, action);
		case actionTypes.FETCH_TOOLS_FAIL:
			return fetchTools.fail(state, action);
		
		case actionTypes.FIND_TOOL_BY_NAME_START:
			return findToolByname.start(state, action);
		case actionTypes.FIND_TOOL_BY_NAME_SUCCESS:
			return findToolByname.success(state, action);
		case actionTypes.FIND_TOOL_BY_NAME_FAIL:
			return findToolByname.fail(state, action);
		
        default:
            return state;
    }
};


