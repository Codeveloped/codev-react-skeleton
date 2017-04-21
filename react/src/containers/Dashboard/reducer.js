import {addReducer} from '../../reducers';

const initialState = {
    loading: false,
    error: null,
    all: [],
};


const reducer = function (state = initialState, action = {}) {

    switch (action.type) {


        default:
            return state;
    }
};

addReducer('dashboard', reducer);

export default reducer;

