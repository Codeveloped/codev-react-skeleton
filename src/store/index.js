import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools/component'

import promiseMiddleware from './middleware/promise';


export default function configureStore(state) {
    const store = createStore(
        rootReducer,
        state,
        compose(
            applyMiddleware(
                promiseMiddleware,
                createLogger()
            ),
            DevTools.instrument()
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}
