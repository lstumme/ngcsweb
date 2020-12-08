import * as actionTypes from '../actions/actionTypes';

const initialState = {
	pageCount = 0,
	toolVersions = null,
	error = null,
	loading = false,
	updatedToolVersion = null,
	fetchedToolVersion = null,
	toolVersionCreated = false,
	toolVersionUpdated = false,
	toolVersionDeleted = false,
};

const createToolVersion = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			toolVersionCreated = false,
			toolVersionUpdated = false,
			toolVersionDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			toolVersionCreated = true,
			updatedToolVersion = action.toolVersion,
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

const updateToolVersion = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			toolVersionCreated = false,
			toolVersionUpdated = false,
			toolVersionDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			toolVersionUpdated = true,
			updatedToolVersion = action.toolVersion,
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

const deleteToolVersion = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			toolVersionCreated = false,
			toolVersionUpdated = false,
			toolVersionDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			toolVersionDeleted = true,
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

const fetchToolVersion = {
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
			fetchedToolVersion = action.toolVersion,
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

const fetchToolVersions = {
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
			fetchedToolVersion = action.toolVersions,
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



const reducer = (state = initialState, action) => {
    switch (action.type) {
		case actionTypes.CREATE_TOOLVERSION_START:
			return createToolVersion.start(state, action);
		case actionTypes.CREATE_TOOLVERSION_SUCCESS:
			return createToolVersion.success(state, action);
		case actionTypes.CREATE_TOOLVERSION_FAIL:
			return createToolVersion.fail(state, action);
		
		case actionTypes.UPDATE_TOOLVERSION_START:
			return updateToolVersion.start(state, action);
		case actionTypes.UPDATE_TOOLVERSION_SUCCESS:
			return updateToolVersion.success(state, action);
		case actionTypes.UPDATE_TOOLVERSION_FAIL:
			return updateToolVersion.fail(state, action);
		
		case actionTypes.DELETE_TOOLVERSION_START:
			return deleteToolVersion.start(state, action);
		case actionTypes.DELETE_TOOLVERSION_SUCCESS:
			return deleteToolVersion.success(state, action);
		case actionTypes.DELETE_TOOLVERSION_FAIL:
			return deleteToolVersion.fail(state, action);
		
		case actionTypes.FETCH_TOOLVERSION_START:
			return fetchToolVersion.start(state, action);
		case actionTypes.FETCH_TOOLVERSION_SUCCESS:
			return fetchToolVersion.success(state, action);
		case actionTypes.FETCH_TOOLVERSION_FAIL:
			return fetchToolVersion.fail(state, action);
		
		case actionTypes.FETCH_TOOLVERSIONS_START:
			return fetchToolVersions.start(state, action);
		case actionTypes.FETCH_TOOLVERSIONS_SUCCESS:
			return fetchToolVersions.success(state, action);
		case actionTypes.FETCH_TOOLVERSIONS_FAIL:
			return fetchToolVersions.fail(state, action);
		
        default:
            return state;
    }
};


