import React, { PropTypes } from 'react'

const InputHidden = ({
    // Redux-form Field
    input,
    meta,

    // Input
    type,


}) => {
    return (

        <input
            type={type}
            value={input.value}
            name={input.name}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            onChange={input.onChange}
            onDragStart={input.onDragStart}
        />
    );
};

InputHidden.defaultProps = {
    type: 'hidden',
};

InputHidden.propTypes = {
    //Redux-form Field
    input: PropTypes.object,
    meta: PropTypes.object,

    //Input
    type: PropTypes.string,
};

export default InputHidden;


