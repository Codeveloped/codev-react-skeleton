
export function createPromiseAction (type, ok, fail, method) {
    return function (dispatch) {
        return function (data) {
            return dispatch({
                types: [type, ok, fail],
                promise: method(data),
                data: data
            });
        }
    }
}

export function createAction (type) {
    return function (dispatch) {
        return function (data) {
            return dispatch({
                type: type,
                data: data
            })
        }
    }
}