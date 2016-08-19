import React, { PropTypes } from 'react'


const InputFile = ({
    title,
    description,
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
            <span className="input-group-addon" id="basic-addon1">{title}</span>
            {description && <sub>{description}</sub>}
            {touched && error && <sub>{error}</sub>}
            <input
                type="file"
                className="form-control"

                name={name}

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

InputFile.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
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

export default InputFile;


