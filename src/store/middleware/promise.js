
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
                next({...rest, error, type: FAILURE});
                return error;
            }
        );

    };
}
