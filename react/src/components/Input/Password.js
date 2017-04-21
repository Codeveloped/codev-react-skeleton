import React, { PropTypes } from 'react'
import { Form, Input } from 'antd';

const FormItem = Form.Item;


const InputPassword = ({
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
    type,
    id,
    defaultValue,
    size,
    disabled,
    addonBefore,
    addonAfter,
    prefix,
    suffix,
    onPressEnter,
    autosize,

    placeholder,
    className,
    prefixCls,
    autoComplete,
    style,
    readOnly,
    onKeyDown,
    onClick,

    //Apple
    autoCorrect,
    autoCapitalize,


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
            <Input
                type={type}
                id={id}
                value={input.value}
                defaultValue={defaultValue}
                size={size}
                disabled={disabled}
                addonBefore={addonBefore}
                addonAfter={addonAfter}
                prefix={prefix}
                suffix={suffix}
                onPressEnter={onPressEnter}
                autosize={autosize}

                name={input.name}
                placeholder={placeholder}
                className={className}
                prefixCls={prefixCls}
                autoComplete={autoComplete}
                style={style}
                readOnly={readOnly}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                onKeyDown={onKeyDown}
                onChange={input.onChange}
                onClick={onClick}
                onDragStart={input.onDragStart}
                onDrop={input.onDrop}

                //Apple
                autoCorrect={autoCorrect}
                autoCapitalize={autoCapitalize}
            />
        </FormItem>
    );
};

InputPassword.defaultProps = {
    required: false,
    hasFeedback: false,
    colon: true,

    type: 'password',
    size: 'default', // 'small', 'large'
    disabled: false,
    autosize: false,
    autoComplete: 'on', //'off'
    autoCorrect: 'off',
    autoCapitalize: 'off'

};

InputPassword.propTypes = {
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
    type: PropTypes.string,
    id: PropTypes.string,
    defaultValue: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.any,
    addonBefore: PropTypes.node,
    addonAfter: PropTypes.node,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    onPressEnter: PropTypes.any,
    autosize: PropTypes.any,

    // Regular Input props
    placeholder: PropTypes.string,
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    autoComplete: PropTypes.any,
    style: PropTypes.any,
    readOnly: PropTypes.any,
    onKeyDown: PropTypes.string,
    onClick: PropTypes.any,

    autoCorrect: PropTypes.any,
    autoCapitalize: PropTypes.any,

};

export default InputPassword;
