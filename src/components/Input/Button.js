import React, { PropTypes } from 'react'


const InputButton = ({
    children,
    disabled,
    onClick,
    onBlur,
    onDragStart,
    onDrop,
    onFocus,
}) => {
    return (
        <div>
            <button
                disabled={disabled}
                onClick={onClick}
                onBlur={onBlur}
                onDragStart={onDragStart}
                onDrop={onDrop}
                onFocus={onFocus}

                className="btn btn-primary"
            >
                {children}
            </button>
        </div>
    );
};

InputButton.propTypes = {
    children: PropTypes.any.isRequired,
    disable: PropTypes.bool,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func
};

export default InputButton;


