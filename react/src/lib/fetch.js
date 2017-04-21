import 'whatwg-fetch';
import store from 'store';


function _fetch (path, spec) {

    return new Promise(function (resolve, reject) {

        if (!spec) { spec = { method: 'GET' }; }
        if (!spec.headers) { spec.headers = {}; }
        if (!(spec.headers.Accept)) { spec.headers.Accept = 'application/json'; }
        if (!(spec.headers['Content-Type'])) { spec.headers['Content-Type'] = 'application/json'; }

        const user = store.get('user') || {};

        if (user.token) {
            spec.headers['Authorization'] = 'JWT ' + user.token;
        }

        if (spec.body && Object.prototype.toString.call(spec.body) !== '[object String]')
            spec.body = JSON.stringify(spec.body);

        return fetch(path, spec).then(function (resp) {

            //TODO formalize errors, => json-rpc v2 spec response objects (look at the formal promise response spec also)

            let action = (resp.status >= 200 && resp.status < 300) ? resolve : reject;

            if (resp.headers.get('content-type') && resp.headers.get('content-type').indexOf('json') !== -1) {
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

}


function postWithFileData (data) {

    let send = new FormData();
    let key, value;
    for (key in data) {
        if (data.hasOwnProperty(key)) {
            value = data[key];
            if (Object.prototype.toString.call(value) === '[object FileList]') {
                value = value[0]
            }
            send.append(key, value);
        }
    }

    return send;
}


_fetch.postWithFileData = postWithFileData;


export default _fetch;