import React, { PropTypes } from 'react'


const InputText = ({
    title,
    description,
    value,
    name,

    touched,
    error,

    placeholder,
    checked,
    onBlur,
    onChange,
    onDragStart,
    onDrop,
    onFocus,

    type
}) => {
    return (
        <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">{title}</span>
            {description && <sub>{description}</sub>}
            {touched && error && <sub>{error}</sub>}
            <input
                type={type}
                className="form-control"

                name={name}
                value={value}

                placeholder={placeholder}
                checked={checked}
                onBlur={onBlur}
                onChange={onChange}
                onDragStart={onDragStart}
                onDrop={onDrop}
                onFocus={onFocus}
            />
        </div>
    );
};

InputText.propTypes = {
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

export default InputText;


