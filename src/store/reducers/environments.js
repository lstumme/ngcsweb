import * as actionTypes from '../actions/actionTypes';

const initialState = {
	pageCount = 0,
	environments = null,
	error = null,
	loading = false,
	updatedEnvironment = null,
	fetchedEnvironment = null,
	environmentCreated = false,
	environmentUpdated = false,
	environmentDeleted = false,
};

const createEnvironment = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			environmentCreated = false,
			environmentUpdated = false,
			environmentDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			environmentCreated = true,
			updatedEnvironment = action.environment,
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

const updateEnvironment = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			environmentCreated = false,
			environmentUpdated = false,
			environmentDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			environmentUpdated = true,
			updatedEnvironment = action.environment,
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

const deleteEnvironment = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			environmentCreated = false,
			environmentUpdated = false,
			environmentDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			environmentDeleted = true,
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

const fetchEnvironment = {
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
			fetchedEnvironment = action.environment,
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

const fetchEnvironments = {
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
			fetchedEnvironment = action.environments,
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


const findEnvironmentByname = {
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
			fetchedEnvironment = null,
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

const addModuleVersionToEnvironment = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			environmentCreated = false,
			environmentUpdated = false,
			environmentDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			environmentUpdated = true,
			updatedEnvironment = action.environment,
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

const removeModuleVersionFromEnvironment = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			environmentCreated = false,
			environmentUpdated = false,
			environmentDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			environmentUpdated = true,
			updatedEnvironment = action.environment,
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

const addToolVersionToEnvironment = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			environmentCreated = false,
			environmentUpdated = false,
			environmentDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			environmentUpdated = true,
			updatedEnvironment = action.environment,
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

const removeToolVersionFromEnvironment = {
	start: (state, action) => {
		return {
			...state,
			loading: true,
			error: null,
			environmentCreated = false,
			environmentUpdated = false,
			environmentDeleted = false,
		};
	},
	success: (state, action) => {
		return {
			...state,
			loading: false,
			environmentUpdated = true,
			updatedEnvironment = action.environment,
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
		case actionTypes.CREATE_ENVIRONMENT_START:
			return createEnvironment.start(state, action);
		case actionTypes.CREATE_ENVIRONMENT_SUCCESS:
			return createEnvironment.success(state, action);
		case actionTypes.CREATE_ENVIRONMENT_FAIL:
			return createEnvironment.fail(state, action);
		
		case actionTypes.UPDATE_ENVIRONMENT_START:
			return updateEnvironment.start(state, action);
		case actionTypes.UPDATE_ENVIRONMENT_SUCCESS:
			return updateEnvironment.success(state, action);
		case actionTypes.UPDATE_ENVIRONMENT_FAIL:
			return updateEnvironment.fail(state, action);
		
		case actionTypes.DELETE_ENVIRONMENT_START:
			return deleteEnvironment.start(state, action);
		case actionTypes.DELETE_ENVIRONMENT_SUCCESS:
			return deleteEnvironment.success(state, action);
		case actionTypes.DELETE_ENVIRONMENT_FAIL:
			return deleteEnvironment.fail(state, action);
		
		case actionTypes.FETCH_ENVIRONMENT_START:
			return fetchEnvironment.start(state, action);
		case actionTypes.FETCH_ENVIRONMENT_SUCCESS:
			return fetchEnvironment.success(state, action);
		case actionTypes.FETCH_ENVIRONMENT_FAIL:
			return fetchEnvironment.fail(state, action);
		
		case actionTypes.FETCH_ENVIRONMENTS_START:
			return fetchEnvironments.start(state, action);
		case actionTypes.FETCH_ENVIRONMENTS_SUCCESS:
			return fetchEnvironments.success(state, action);
		case actionTypes.FETCH_ENVIRONMENTS_FAIL:
			return fetchEnvironments.fail(state, action);
		
		case actionTypes.FIND_ENVIRONMENT_BY_NAME_START:
			return findEnvironmentByname.start(state, action);
		case actionTypes.FIND_ENVIRONMENT_BY_NAME_SUCCESS:
			return findEnvironmentByname.success(state, action);
		case actionTypes.FIND_ENVIRONMENT_BY_NAME_FAIL:
			return findEnvironmentByname.fail(state, action);
		
		case actionTypes.ADD_MODULEVERSION_TO_ENVIRONMENT_START:
			return addModuleVersionToEnvironment.start(state, action);
		case actionTypes.ADD_MODULEVERSION_TO_ENVIRONMENT_SUCCESS:
			return addModuleVersionToEnvironment.success(state, action);
		case actionTypes.ADD_MODULEVERSION_TO_ENVIRONMENT_FAIL:
			return addModuleVersionToEnvironment.fail(state, action);
		
		case actionTypes.REMOVE_MODULEVERSION_FROM_ENVIRONMENT_START:
			return removeModuleVersionFromEnvironment.start(state, action);
		case actionTypes.REMOVE_MODULEVERSION_FROM_ENVIRONMENT_SUCCESS:
			return removeModuleVersionFromEnvironment.success(state, action);
		case actionTypes.REMOVE_MODULEVERSION_FROM_ENVIRONMENT_FAIL:
			return removeModuleVersionFromEnvironment.fail(state, action);
		
		case actionTypes.ADD_TOOLVERSION_TO_ENVIRONMENT_START:
			return addToolVersionToEnvironment.start(state, action);
		case actionTypes.ADD_TOOLVERSION_TO_ENVIRONMENT_SUCCESS:
			return addToolVersionToEnvironment.success(state, action);
		case actionTypes.ADD_TOOLVERSION_TO_ENVIRONMENT_FAIL:
			return addToolVersionToEnvironment.fail(state, action);
		
		case actionTypes.REMOVE_TOOLVERSION_FROM_ENVIRONMENT_START:
			return removeToolVersionFromEnvironment.start(state, action);
		case actionTypes.REMOVE_TOOLVERSION_FROM_ENVIRONMENT_SUCCESS:
			return removeToolVersionFromEnvironment.success(state, action);
		case actionTypes.REMOVE_TOOLVERSION_FROM_ENVIRONMENT_FAIL:
			return removeToolVersionFromEnvironment.fail(state, action);
		
        default:
            return state;
    }
};


