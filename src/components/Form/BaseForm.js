import React, { PropTypes } from 'react'

import InputButton from '../../components/Input/Button';
import Loader from '../../components/Loader';
import { Danger } from '../../components/Alert';


const BaseForm = ({
    children,
    formError,
    submit,
    loader,

    handleSubmit,
    submitting,
    fields
}) => {

    formError = formError || (fields.FORM_ERROR.error && <Danger>{fields.FORM_ERROR.error}</Danger>);
    submit = submit || <InputButton disabled={submitting} className="btn btn-primary">Verstuur</InputButton>;
    loader = loader || <Loader/>;
    
    return (
        <form onSubmit={handleSubmit}>
            {fields.FORM_ERROR.touched && fields.FORM_ERROR.error && formError}

            {children}

            {submitting && loader}

            {submit}
            
        </form>
    );
};


BaseForm.propTypes= {
    children: PropTypes.any.isRequired,
    formError: PropTypes.element,
    submit: PropTypes.element,
    loader: PropTypes.element,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    fields: PropTypes.object.isRequired
};


export default BaseForm;
