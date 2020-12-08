import * as actionTypes from '../actions/actionTypes';

const initialState = {
	pageCount = 0,
	modules = null,
	error = null,
	loading = false,
	updatedModule = null,
	fetchedModule = null,
	moduleCreated = false,
	moduleUpdated = false,
	moduleDeleted = false,
};

const createModule = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			moduleCreated = false,
			moduleUpdated = false,
			moduleDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			moduleCreated = true,
			updatedModule = action.module,
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

const updateModule = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			moduleCreated = false,
			moduleUpdated = false,
			moduleDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			moduleUpdated = true,
			updatedModule = action.module,
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

const deleteModule = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			moduleCreated = false,
			moduleUpdated = false,
			moduleDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			moduleDeleted = true,
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

const fetchModule = {
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
			fetchedModule = action.module,
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

const fetchModules = {
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
			fetchedModule = action.modules,
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


const findModuleByname = {
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
			fetchedModule = null,
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
		case actionTypes.CREATE_MODULE_START:
			return createModule.start(state, action);
		case actionTypes.CREATE_MODULE_SUCCESS:
			return createModule.success(state, action);
		case actionTypes.CREATE_MODULE_FAIL:
			return createModule.fail(state, action);
		
		case actionTypes.UPDATE_MODULE_START:
			return updateModule.start(state, action);
		case actionTypes.UPDATE_MODULE_SUCCESS:
			return updateModule.success(state, action);
		case actionTypes.UPDATE_MODULE_FAIL:
			return updateModule.fail(state, action);
		
		case actionTypes.DELETE_MODULE_START:
			return deleteModule.start(state, action);
		case actionTypes.DELETE_MODULE_SUCCESS:
			return deleteModule.success(state, action);
		case actionTypes.DELETE_MODULE_FAIL:
			return deleteModule.fail(state, action);
		
		case actionTypes.FETCH_MODULE_START:
			return fetchModule.start(state, action);
		case actionTypes.FETCH_MODULE_SUCCESS:
			return fetchModule.success(state, action);
		case actionTypes.FETCH_MODULE_FAIL:
			return fetchModule.fail(state, action);
		
		case actionTypes.FETCH_MODULES_START:
			return fetchModules.start(state, action);
		case actionTypes.FETCH_MODULES_SUCCESS:
			return fetchModules.success(state, action);
		case actionTypes.FETCH_MODULES_FAIL:
			return fetchModules.fail(state, action);
		
		case actionTypes.FIND_MODULE_BY_NAME_START:
			return findModuleByname.start(state, action);
		case actionTypes.FIND_MODULE_BY_NAME_SUCCESS:
			return findModuleByname.success(state, action);
		case actionTypes.FIND_MODULE_BY_NAME_FAIL:
			return findModuleByname.fail(state, action);
		
        default:
            return state;
    }
};


