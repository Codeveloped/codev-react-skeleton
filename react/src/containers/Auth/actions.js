import * as types from './types';

import user from '../../lib/user';


export function login(dispatch) {
    return function (data) {
        dispatch({
            types: [
                types.AUTH_LOGIN,
                types.AUTH_LOGIN_SUCCESS,
                types.AUTH_LOGIN_FAIL
            ],
            promise: user.auth.login(data)
        });
    }
}

export function logout(dispatch) {
    return function () {
        dispatch({
            types: [
                types.AUTH_LOGOUT,
                types.AUTH_LOGOUT_SUCCESS,
                types.AUTH_LOGOUT_FAIL
            ],
            promise: user.auth.logout()
        });
    }
}
