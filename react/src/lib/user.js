import fetch from './fetch';
import store from 'store';


////////////////////////////////////////
//user object
const user = {};

user.data = store.get('user') || null;


user.isLoggedIn = function isLoggedIn () {
    return !!(user.data && user.data.token);
};


////////////////////////////////////////
// auth api, updates underlying user

const api = {};

api.login = function login (userData) {
    user.data = userData;
    store.set('user', user.data);
};

api.logout = function logout () {
    store.remove('user');
    user.data = null;
};

api.isLoggedIn = user.isLoggedIn;

api.getUser = function getUser () {
    return user.data;
};

api.auth = {};

api.auth.login = function login (data) {
    return fetch ('/api-token-auth/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (resp) {
        api.login(resp.json);
        return resp;
    })
};

api.auth.token = function login (data) {
    return fetch ('/auth/api/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (resp) {
        api.login(resp.json);
        return resp;
    })
};

api.auth.logout = function logout () {
    return new Promise(function (resolve, reject) {
        api.logout();
        resolve();
    });
};

// only api is exported, never the user, no direct access
export default api;

