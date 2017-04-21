import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Component from './LoginForm';
import './reducer';

import * as actions from './actions';


const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        frm_error: state.auth.error,
        user: state.auth.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: actions.login(dispatch)
    }
};


let Cmp = Component;


Cmp = reduxForm({
    form: 'LoginForm',
    validate: values => {
        const errors = {};
        if (!values.email) errors.email = 'Required';
        if (!values.password) errors.password = 'Required';
        return errors;
    }
})(Cmp);


Cmp = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cmp);


export default Cmp;

