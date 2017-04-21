const names = {};

function recurse (items) {
    items.forEach(function (item) {
        names[item.name] = item;
        if (item.childRoutes) {
            recurse(item.childRoutes)
        }
    });
}

const replace = /:[^/;]+/;

export const initRoutes = function (routes) {
    recurse(routes.childRoutes);
    return routes;
};


export const resolveRoute = function (name) {
    let route = names[name];

    if (!route) throw new Error('No route with that name configured');

    if (route.path.indexOf(':') === -1) return route.path;

    return function (data) {
        let _url = route.path + '';

        if (Object.prototype.toString.call(data) === '[object Object]') {

            //handle data if it is an object
            Object.keys(data).forEach(function (key) {
                _url = _url.replace(':' + key, data[key]);
            });

        } else {

            // handle arguments, from left to right
            const args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
            for (let i = 0, l = args.length; i < l; ++i) {
                _url = _url.replace(replace, args[i]);
            }
        }

        return _url;
    };
};
