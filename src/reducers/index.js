import { routerReducer as routing } from 'react-router-redux'
import {reducer as form} from 'redux-form';
import {reducer as modals} from 'react-redux-modal'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    routing,
    form,
    modals
});


export default rootReducer;
