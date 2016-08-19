import 'whatwg-fetch';



// function createError(res, err) {
//     if (res && res.body && res.body.error) return res.body.error;
//     return {
//         name: 'Error',
//         status: res && res.status || 500,
//         message: res && res.statusText || err.message,
//         statusCode: res && res.statusCode || 500
//     }
// }



export default function (path, spec) {

    return new Promise(function (resolve, reject) {

        return fetch(path, spec).then(function (resp) {

            //TODO formalize errors, => json-rpc v2 spec response objects (look at the formal promise response spec also)

            var action = (resp.status >= 200 && resp.status < 300) ? resolve : reject;

            if (resp.headers.get('content-type').indexOf('json') !== -1) {
                return resp.json().then((json) => {
                    return action({
                        response: resp,
                        json: json
                    });
                }).catch((err) => {
                    return reject({
                        response: resp,
                        json: null,
                        error: err.toString()
                    });
                });
            } else {
                return resp.text().then((text) => {
                    return action({
                        response: resp,
                        text: text
                    });
                }).catch((err) => {
                    return reject({
                        response: resp,
                        text: null,
                        error: err.toString()
                    });
                });
            }

        }).catch((err) => {
            return reject({
                error: err.toString()
            });
        });

    });

};
