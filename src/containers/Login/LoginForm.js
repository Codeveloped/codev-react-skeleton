import React, { PropTypes } from 'react'

import BaseForm from '../../components/Form/BaseForm';

import InputText from '../../components/Input/Text';
import InputPassword from '../../components/Input/Password';



const LoginForm = ({
    handleSubmit,
    submitting,
    fields
}) => {
    return <BaseForm
        handleSubmit={handleSubmit}
        submitting={submitting}
        fields={fields}
        content={
            <div>
                <InputText
                    title={'Gebruikersnaam'}
                    {...fields.username}
                    />
                <InputPassword
                    title={'Wachtwoord'}
                    {...fields.password}
                    />
            </div>
        }
        />
};


LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};


export default LoginForm;
