import React, { PropTypes } from 'react'


const InputHidden = ({
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
    onFocus
}) => {
    return (
        <div className="input-group">
            {title && <span className="input-group-addon" id="basic-addon1">{title}</span>}
            {description && <sub>{description}</sub>}
            {touched && error && <sub>{error}</sub>}
            <input
                type="hidden"

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

InputHidden.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.any.isRequired,
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

export default InputHidden;


