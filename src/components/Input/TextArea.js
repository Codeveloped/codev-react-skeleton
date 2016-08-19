import React, { PropTypes } from 'react'


const InputTextArea = ({
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
            <label className="control-label" htmlFor={name}>{title}</label>
            {description && <sub>{description}</sub>}
            {touched && error && <sub>{error}</sub>}
            <textarea
                className="form-control"
                type="text"
                rows="3"
                id={name}
                name={name}
                value={value || ''}

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


InputTextArea.propTypes = {
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

export default InputTextArea;


