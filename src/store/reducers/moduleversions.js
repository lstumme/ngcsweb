import * as actionTypes from '../actions/actionTypes';

const initialState = {
	pageCount = 0,
	moduleVersions = null,
	error = null,
	loading = false,
	updatedModuleVersion = null,
	fetchedModuleVersion = null,
	moduleVersionCreated = false,
	moduleVersionUpdated = false,
	moduleVersionDeleted = false,
};

const createModuleVersion = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			moduleVersionCreated = false,
			moduleVersionUpdated = false,
			moduleVersionDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			moduleVersionCreated = true,
			updatedModuleVersion = action.moduleVersion,
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

const updateModuleVersion = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			moduleVersionCreated = false,
			moduleVersionUpdated = false,
			moduleVersionDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			moduleVersionUpdated = true,
			updatedModuleVersion = action.moduleVersion,
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

const deleteModuleVersion = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			moduleVersionCreated = false,
			moduleVersionUpdated = false,
			moduleVersionDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			moduleVersionDeleted = true,
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

const fetchModuleVersion = {
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
			fetchedModuleVersion = action.moduleVersion,
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

const fetchModuleVersions = {
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
			fetchedModuleVersion = action.moduleVersions,
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
		case actionTypes.CREATE_MODULEVERSION_START:
			return createModuleVersion.start(state, action);
		case actionTypes.CREATE_MODULEVERSION_SUCCESS:
			return createModuleVersion.success(state, action);
		case actionTypes.CREATE_MODULEVERSION_FAIL:
			return createModuleVersion.fail(state, action);
		
		case actionTypes.UPDATE_MODULEVERSION_START:
			return updateModuleVersion.start(state, action);
		case actionTypes.UPDATE_MODULEVERSION_SUCCESS:
			return updateModuleVersion.success(state, action);
		case actionTypes.UPDATE_MODULEVERSION_FAIL:
			return updateModuleVersion.fail(state, action);
		
		case actionTypes.DELETE_MODULEVERSION_START:
			return deleteModuleVersion.start(state, action);
		case actionTypes.DELETE_MODULEVERSION_SUCCESS:
			return deleteModuleVersion.success(state, action);
		case actionTypes.DELETE_MODULEVERSION_FAIL:
			return deleteModuleVersion.fail(state, action);
		
		case actionTypes.FETCH_MODULEVERSION_START:
			return fetchModuleVersion.start(state, action);
		case actionTypes.FETCH_MODULEVERSION_SUCCESS:
			return fetchModuleVersion.success(state, action);
		case actionTypes.FETCH_MODULEVERSION_FAIL:
			return fetchModuleVersion.fail(state, action);
		
		case actionTypes.FETCH_MODULEVERSIONS_START:
			return fetchModuleVersions.start(state, action);
		case actionTypes.FETCH_MODULEVERSIONS_SUCCESS:
			return fetchModuleVersions.success(state, action);
		case actionTypes.FETCH_MODULEVERSIONS_FAIL:
			return fetchModuleVersions.fail(state, action);
		
        default:
            return state;
    }
};


