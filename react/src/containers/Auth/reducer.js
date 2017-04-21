import {addReducer} from '../../reducers';

import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAIL,

    AUTH_LOGOUT,
    AUTH_LOGOUT_SUCCESS,
    AUTH_LOGOUT_FAIL,

} from './types';

const initialState = {
    loading: false,
    error: null,
    user: null
};

const reducer = function (state = initialState, action = {}) {

    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...initialState,
                loading: true
            };
        case AUTH_LOGIN_SUCCESS:
            return {
                ...initialState
            };
        case AUTH_LOGIN_FAIL:
            return {
                ...initialState,
                error: action.error
            };

        case AUTH_LOGOUT:
            return {
                ...state,
                loading: true
            };
        case AUTH_LOGOUT_SUCCESS:
            return {
                ...initialState
            };
        case AUTH_LOGOUT_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
};


addReducer('auth', reducer);

export default reducer;
