import React, { PropTypes } from 'react'
import { Form, InputNumber as Number } from 'antd';

const FormItem = Form.Item;


const InputNumber = ({
    // Redux-form Field
    input,
    meta,

    // FormItem
    label,
    labelCol,
    wrapperCol,
    help,
    extra,
    required,
    validateStatus,
    hasFeedback,
    colon,

    // Input values, controlled by Field
    // value,
    // name,
    // onBlur,
    // onFocus,
    // onChange,
    // onDragStart,
    // onDrop,

    //Input
    id,
    defaultValue,
    size,
    disabled,
    className,
    style,
    min,
    max,
    step,
    formatter,


}) => {

    // Objects passed by Redux-form Field
    // input:
    //     name
    //     onBlur
    //     onChange
    //     onDragStart
    //     onDrop
    //     onFocus
    //     value
    //
    // meta:
    //     active
    //     asyncValidating
    //     autofilled
    //     dirty
    //     dispatch
    //     error
    //     form
    //     invalid
    //     pristine
    //     submitFailed
    //     submitting
    //     touched
    //     valid
    //     visited
    //     warning

    // validateStatus = 'success', 'warning', 'error', 'validating';

    if (meta.invalid && (!meta.pristine || meta.submitFailed)) {
        hasFeedback=true;
        validateStatus='error';
        help=meta.error;
    }
    if (!meta.pristine && meta.valid) {
        hasFeedback=true;
        validateStatus='success';
    }
    if (meta.asyncValidating) {
        validateStatus='validating';
    }

    return (
        <FormItem
            label={label}
            labelCol={labelCol}
            wrapperCol={wrapperCol}
            help={help}
            extra={extra}
            required={required}
            validateStatus={validateStatus}
            hasFeedback={hasFeedback}
            colon={colon}
        >
            <Number
                id={id}
                value={input.value}
                defaultValue={defaultValue}
                size={size}
                disabled={disabled}
                min={min}
                max={max}
                step={step}
                formatter={formatter}

                name={input.name}
                className={className}
                style={style}
                onChange={input.onChange}

            />
        </FormItem>
    );
};

InputNumber.defaultProps = {
    required: false,
    hasFeedback: false,
    colon: true,

    size: 'default', // 'small', 'large'
    disabled: false,
    step: 1,
    min: -Infinity,
    max: Infinity,
};

InputNumber.propTypes = {
    //Redux-form Field
    input: PropTypes.object,
    meta: PropTypes.object,

    //FormItem
    label: PropTypes.string.isRequired,
    labelCol: PropTypes.object,
    wrapperCol: PropTypes.object,
    help: PropTypes.node,
    extra: PropTypes.node,
    required: PropTypes.bool,
    validateStatus: PropTypes.string,
    hasFeedback: PropTypes.bool,
    colon: PropTypes.bool,

    //Input
    id: PropTypes.string,
    defaultValue: PropTypes.number,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.any,
    onKeyDown: PropTypes.func,
    onClick: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    formatter: PropTypes.func,

};

export default InputNumber;


