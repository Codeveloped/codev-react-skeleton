import React, { PropTypes } from 'react'


const InputChoiceSelect = ({
    title,
    description,
    value,
    name,

    unManaged,

    answers,

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
            <label className="input-group-addon" htmlFor={name}>{title}</label>
            {description && <sub>{description}</sub>}
            {touched && error && <sub>{error}</sub>}
            <select
                className="form-control"

                value={unManaged ? undefined : value || ''}
                name={name}

                placeholder={placeholder}
                checked={checked}
                onBlur={onBlur}
                onChange={onChange}
                onDragStart={onDragStart}
                onDrop={onDrop}
                onFocus={onFocus}
            >
                {answers.map((answer, id) => {
                    return <option
                        key={id}
                        value={answer.value || ''}
                        >
                        {answer.description}
                    </option>
                })}

            </select>
        </div>
    );
};

InputChoiceSelect.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired,
    name: PropTypes.string.isRequired,
    unManaged: PropTypes.bool,
    touched: PropTypes.bool,
    error: PropTypes.string,

    placeholder: PropTypes.any,
    checked: PropTypes.any,
    onBlur: PropTypes.any,
    onChange: PropTypes.any,
    onDragStart: PropTypes.any,
    onDrop: PropTypes.any,
    onFocus: PropTypes.any,
    value: PropTypes.any
};

export default InputChoiceSelect;
