import { SubmissionError } from 'redux-form'
import * as constants from '../../constants'

export default function promiseMiddleware() {
    return (next) => (action) => {
        //get `promise` and `types` from the action
        const { promise, types, ...rest } = action;

        //if no `promise` we pass it on
        if (!promise) {
            return next(action);
        }

        //get the request types
        const [REQUEST, SUCCESS, FAILURE] = types;

        //continue the chain, with the intent as type
        next({...rest, type: REQUEST});

        //await the promise positive and negative results
        //return the promise, so the action creator can chain the promise also
        return promise.then(
            (result) => {
                next({...rest, result, type: SUCCESS});
                return result;
            },
            (error) => {
                const status = (error.response || {}).status;

                // Error messages component
                next({...rest, error, type: FAILURE});
                setTimeout(()=>{next({...rest, error, type: 'ERROR_' + status}, 10)});

                // Default redux form error handling
                if (status === constants.DEFAULT_ERROR_RESPONSE) throw new SubmissionError(error.json);

                return Promise.reject(error);
            }
        );
    };
}
