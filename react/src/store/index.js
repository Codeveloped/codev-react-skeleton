import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'

import {createReducer} from '../reducers';

import promiseMiddleware from './middleware/promise';


export default function configureStore(state) {
    const store = createStore(
        createReducer(),
        state,
        compose(
            applyMiddleware(
                promiseMiddleware,
                createLogger()
            ),
        )
    );

    promiseMiddleware.store = store;

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(createReducer())
        })
    }

    return store;
}
