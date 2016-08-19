import React, { PropTypes } from 'react'

import InputText from './Text';


const InputPassword = ({
    ...props
}) => {
    return (
        <InputText {...props} type={'password'} />
    );
};

InputPassword.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    touched: PropTypes.bool,
    error: PropTypes.string,

    placeholder: PropTypes.any,
    checked: PropTypes.any,
    onBlur: PropTypes.any,
    onChange: PropTypes.any,
    onDragStart: PropTypes.any,
    onDrop: PropTypes.any,
    onFocus: PropTypes.any
};

export default InputPassword;
