import React, {PropTypes} from 'react';
import { DatePicker } from 'antd';
import { Form } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;


const InputDate = ({
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

    //DatePicker Common
    allowClear,
    disabled,
    style,
    popupStyle,
    size,
    locale,
    disabledDate,
    getCalendarContainer,
    // open,
    onOpenChange,
    placeholder,
    onOk,

    //DatePicker Specific
    defaultValue,
    format,
    showTime,
    showToday,
    disabledTime,


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

    input.value = input.value || null; //No empty strings allowed.
    if (input.value) input.value = moment(input.value);

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
            <DatePicker
                allowClear={allowClear}
                disabled={disabled}
                style={style}
                popupStyle={popupStyle}
                size={size}
                locale={locale}
                disabledDate={disabledDate}
                getCalendarContainer={getCalendarContainer}
                // open={open} // Breaks
                onOpenChange={onOpenChange}
                placeholder={placeholder}
                onOk={onOk}

                //DatePicker Specific
                value={input.value}
                defaultValue={defaultValue}
                format={format}
                onChange={input.onChange}
                showTime={showTime}
                showToday={showToday}
                disabledTime={disabledTime}

                // Not in spec
                onBlur={input.onBlur}
                name={input.name}
            />
        </FormItem>
    );
};

InputDate.defaultProps = {
    allowClear: true,
    disabled: false,
    format: 'DD/MM/YYYY',
    showToday: true,
    colon: true,
    placeholder: 'Select Date',
};


InputDate.propTypes = {
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

    //DatePicker Common
    allowClear: PropTypes.bool,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    popupStyle: PropTypes.object,
    size: PropTypes.string,
    locale: PropTypes.any,
    disabledDate: PropTypes.func,
    getCalendarContainer: PropTypes.func,
    // open: PropTypes.bool,
    onOpenChange: PropTypes.func,
    placeholder: PropTypes.any,
    onOk: PropTypes.func,

    //DatePicker Specific
    defaultValue: PropTypes.any,
    format: PropTypes.string,
    showTime: PropTypes.any,
    showToday: PropTypes.any,
    disabledTime: PropTypes.func,
};

export default InputDate;


