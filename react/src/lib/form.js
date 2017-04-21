import React from 'react';
import { Form } from 'antd';
import flatten from 'flat';

import { Map, fromJS } from 'immutable';

const FormItem = Form.Item;
const initialFormState = new Map();
const re = /[\.\[\]]/;

// TODO replace me with recursion
const reg = /\.?(\d)+/g;


export const formReducer = (state=initialFormState, action={}) => {
    switch (action.type) {
        case 'INIT_FORM':
            return state.set(action.formName, fromJS(action.form));
        case 'UPDATE_FORM':
            return state.setIn(action.path.split(re).filter(x => x !== ''), action.value);
        default:
            return state;
    }
};


export const createFormItemCreator = ({
    getFieldDecorator, formFields, formItemProps
}) => {
    return (name) => {
        const { label, opts, component } = formFields[name];
        return (
            <FormItem {...formItemProps} label={label}>
                {getFieldDecorator(name, opts)(component)}
            </FormItem>
        );
    }
};


export const connectForm = (component) => {
    return Form.create({
        onFieldsChange(props, fields) {
            let key = Object.keys(fields)[0];
            props.onChange(fields[key].value, `${props.formName}.${props.path}.${key}`);
        },
        mapPropsToFields(props) {
            // make fields compatible with and form fields
            let fields = flatten(props.fields.toJS());
            let dict = {};

            Object.keys(fields).forEach((key) => {
                dict[key.replace(reg, '[$1]')] = {value: fields[key]}
            });

            return dict;
        },
    })(component);
};
