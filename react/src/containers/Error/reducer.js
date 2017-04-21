import {addReducer} from '../../reducers';

import {
    ERROR_404,
    ERROR_403,
    ERROR_500,
    ERROR_502,
} from './types';


const initialState = {
    error: null,
    realError: null
};


const setError = function setError(state, action) {
    return {
        ...state,
        error: action.error.text || action.error.json,
        realError: action.error
    };
};


const reducer = function (state = initialState, action = {}) {

    switch (action.type) {
        case ERROR_404:
        case ERROR_403:
        case ERROR_500:
        case ERROR_502:
            return setError(state, action);

        default:
            return state;
    }
};


addReducer('error', reducer);

export default reducer;
