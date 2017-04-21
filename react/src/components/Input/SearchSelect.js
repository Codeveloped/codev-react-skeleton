import React, { PropTypes } from 'react'
import { Select, Form } from 'antd';


const Option = Select.Option;
const FormItem = Form.Item;

const InputSearchSelect = ({
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

    // Select
    multiple,
    allowClear,
    tags,
    onSelect,
    onDeselect,
    onSearch,
    placeholder,

    notFoundContent,
    dropdownMatchSelectWidth,
    optionLabelProp,
    optionFilterProp,
    combobox,
    size,
    showSearch,
    disabled,
    defaultActiveFirstOption,
    dropdownStyle,
    dropdownClassName,
    getPopupContainer,
    labelInValue,
    tokenSeparators,
    style,

    answers,
    answer_value_key,
    answer_description_key,
    answer_disabled_key,
    answer_falsify_disabled_key,

}) => {
    let useValue;

    // if (!answers.length) return null;

    // Cast to string
    if (multiple) {
        useValue = [];
        if (input.value) {
            input.value.forEach((answer) => {
                useValue.push('' + answer)
            });
        }
    } else {
        useValue = '' + input.value;
    }

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

            <Select
                name={input.name}
                onBlur={input.onBlur}
                onChange={input.onChange}
                onDragStart={input.onDragStart}
                onDrop={input.onDrop}
                onFocus={input.onFocus}

                value={useValue}

                multiple={multiple}
                allowClear={allowClear}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                tags={tags}
                onSelect={onSelect}
                onDeselect={onDeselect}
                onSearch={onSearch}
                placeholder={placeholder}

                notFoundContent={notFoundContent}
                dropdownMatchSelectWidth={dropdownMatchSelectWidth}
                optionFilterProp={optionFilterProp}
                optionLabelProp={optionLabelProp}
                combobox={combobox}
                size={size}
                showSearch={showSearch}
                disabled={disabled}
                defaultActiveFirstOption={defaultActiveFirstOption}
                dropdownStyle={dropdownStyle}
                dropdownClassName={dropdownClassName}
                getPopupContainer={getPopupContainer}
                labelInValue={labelInValue}
                tokenSeparators={tokenSeparators}

                style={style}
            >

                {answers.map((answer, idx) => {
                    let disabled = false;
                    if (answer[answer_disabled_key] && !answer_falsify_disabled_key) {
                        disabled = true
                    }
                    // fix for undefined values
                    if (answer[answer_disabled_key] === false && answer_falsify_disabled_key) {
                        disabled = true
                    }

                    return(
                        <Option
                            key={idx} value={answer[answer_value_key] + '' || ''}
                            disabled={disabled}
                        >
                            {answer[answer_description_key]}
                        </Option>
                    )
                })}

            </Select>
        </FormItem>
    );
};

InputSearchSelect.defaultProps = {
    required: false,
    hasFeedback: false,
    colon: true,

    multiple: false,
    allowClear: false,
    tags: false,
    // style: {width: 200},

    notFoundContent: 'Not Found',
    dropdownMatchSelectWidth: true,
    optionLabelProp: 'children',
    optionFilterProp: 'children',
    combobox: false,
    size: 'default', // small, large
    showSearch: true,
    disabled: false,
    defaultActiveFirstOption: true,
    labelInValue: false,

    answer_value_key: 'value',
    answer_description_key: 'description',
    answer_disabled_key: 'disabled',
    answer_falsify_disabled_key: false,

};

InputSearchSelect.propTypes = {
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

    //Select
    // defaultValue: PropTypes.string,
    multiple: PropTypes.bool,
    allowClear: PropTypes.bool,
    tags: PropTypes.bool,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onSearch: PropTypes.func,
    placeholder: PropTypes.string,

    notFoundContent: PropTypes.string,
    dropdownMatchSelectWidth: PropTypes.bool,
    optionLabelProp: PropTypes.string,
    optionFilterProp: PropTypes.string,
    combobox: PropTypes.bool,
    size: PropTypes.string,
    showSearch: PropTypes.bool,
    disabled: PropTypes.bool,
    defaultActiveFirstOption: PropTypes.bool,
    dropdownStyle: PropTypes.object,
    dropdownClassName: PropTypes.string,
    getPopupContainer: PropTypes.func,
    labelInValue: PropTypes.bool,
    tokenSeparators: PropTypes.array,
    style: PropTypes.object,

    answers: PropTypes.any,
    answer_value_key: PropTypes.string,
    answer_description_key: PropTypes.string,
    answer_disabled_key: PropTypes.string,
    answer_falsify_disabled_key: PropTypes.bool,

};

export default InputSearchSelect;
