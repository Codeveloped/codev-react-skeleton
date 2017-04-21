import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'


const reducers = {
    routing,
    // form: formReducer,
    form,
    function (state ={}, action={}) {
        // console.log('ACTION', action, state);
        return state;
    },
};

export const createReducer = () => {
    return combineReducers(reducers);
};

export const addReducer = (key, reducer) => {
    reducers[key] = reducer;
};
