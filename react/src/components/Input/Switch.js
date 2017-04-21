import React, { PropTypes } from 'react'
import { Switch, Icon, Form } from 'antd';

const FormItem = Form.Item;

const InputSwitch = ({
    // Redux-form Field
    input,
    meta,

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

    defaultChecked,
    checkedChildren,
    unCheckedChildren,
    size,


}) => {

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

            <Switch
                checkedChildren={checkedChildren || <Icon type="check" />}
                unCheckedChildren={unCheckedChildren || <Icon type="cross" />}
                name={input.name}
                checked={input.value === true || input.value === 'true' || input.value === '1' || input.value === 1 || input.value === 'on' ? 'checked' : ''}

                defaultChecked={defaultChecked}
                size={size}
                onBlur={input.onBlur}
                onChange={input.onChange}
                onDragStart={input.onDragStart}
                onDrop={input.onDrop}
                onFocus={input.onFocus}
            />
        </FormItem>
    );
};

InputSwitch.defaultProps = {
    required: false,
    hasFeedback: false,
    colon: true,
    size: 'default', // 'small', 'large'
};

InputSwitch.propTypes = {
    // Redux-form Field
    input: PropTypes.object,
    meta: PropTypes.object,

    // FormItem
    label: PropTypes.string.isRequired,
    labelCol: PropTypes.object,
    wrapperCol: PropTypes.object,
    help: PropTypes.node,
    extra: PropTypes.node,
    required: PropTypes.bool,
    validateStatus: PropTypes.string,
    hasFeedback: PropTypes.bool,
    colon: PropTypes.bool,

    defaultChecked: PropTypes.bool,
    checkedChildren: PropTypes.node,
    unCheckedChildren: PropTypes.node,
    size: PropTypes.any,

};

export default InputSwitch;
