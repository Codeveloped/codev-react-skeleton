import {toRecordSet} from './immutable';


export function requestStart (state) {
    return {
        ...state,
        loading: true,
        error: null
    }
}

export function requestData (state, action, field, Record) {
    let st = {
        ...state,
        loading: false,
        error: null,
    };

    if (field) {
        if (Record)
            if (Array.isArray(action.result.json))
                st[field] = toRecordSet(action.result.json, Record);
            else
                st[field] = new Record(action.result.json);
        else
            st[field] = action.result.json;
    }

    return st;
}

export function requestError (state, action) {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}

export function requestUpdateId (state, action, field, Record) {
    let st = {
        ...state,
        loading: false,
        error: null
    };

    st[field] = st[field].update(action.json.id, new Record(action.json));
    return st;
}

export function requestDeleteId (state, action, field) {
    let st = {
        ...state,
        loading: false,
        error: null
    };

    st[field] = st[field].del(action.json.id);
    return st;
}


/**
 * Use this when you need to initialize the reducer
 * @type {string}
 */
export const INIT = '@@redux/INIT';

export function init (state, initialState) {
    return {
        ...initialState,
        ...state
    }
}
