import React, { PropTypes } from 'react'


const InputChoiceRadio = ({
    title,
    description,
    answers,
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
        <div className="">
            <label className="" htmlFor={name}>{title}</label><br/>
            {description && <sub>{description}</sub>}
            {touched && error && <sub>{error}</sub>}
            {answers.map(function (answer, id) {
                return (
                    <div key={id} className="radio">
                        <label>
                            <input
                                type="radio"
                                name={name}
                                value={answer.value || ''}

                                placeholder={placeholder}
                                checked={checked}
                                onBlur={onBlur}
                                onChange={onChange}
                                onDragStart={onDragStart}
                                onDrop={onDrop}
                                onFocus={onFocus}
                            />
                            {answer.description}
                        </label>
                    </div>
                )
            })}
        </div>
    );
};

InputChoiceRadio.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired,
    name: PropTypes.string.isRequired,
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

export default InputChoiceRadio;
