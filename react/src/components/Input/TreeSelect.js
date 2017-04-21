import React, { PropTypes } from 'react'
import { TreeSelect, Form } from 'antd';


const TreeNode = TreeSelect.TreeNode;
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
    labelInValue,
    multiple,
    onSelect,
    allowClear,
    onSearch,
    placeholder,
    searchPlaceholder,
    dropdownStyle,
    dropdownMatchSelectWidth,
    size,
    showSearch,
    disabled,
    showCheckedStrategy,
    treeDefaultExpandAll,
    treeDefaultExpandedKeys,
    treeCheckable,
    treeCheckStrictly,
    filterTreeNode,
    treeNodeFilterProp,
    treeNodeLabelProp,
    treeData,
    treeDataSimpleMode,
    loadData,
    getPopupContainer,
    style,

    answers,
    answer_value_key,
    answer_children_key,
    answer_description_key,
    answer_disabled_key,
    answer_falsify_disabled_key,
    disabled_value,


}) => {
    let useValue;

    if (!answers.length) return null;

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

            <TreeSelect
                name={input.name}
                onBlur={input.onBlur}
                onChange={input.onChange}
                onDragStart={input.onDragStart}
                onDrop={input.onDrop}
                onFocus={input.onFocus}

                value={useValue}
                
                labelInValue={labelInValue}
                multiple={multiple}
                onSelect={onSelect}
                allowClear={allowClear}
                onSearch={onSearch}
                placeholder={placeholder}
                searchPlaceholder={searchPlaceholder}
                dropdownStyle={dropdownStyle}
                dropdownMatchSelectWidth={dropdownMatchSelectWidth}
                size={size}
                showSearch={showSearch}
                disabled={disabled}
                showCheckedStrategy={showCheckedStrategy}
                treeDefaultExpandAll={treeDefaultExpandAll}
                treeDefaultExpandedKeys={treeDefaultExpandedKeys}
                treeCheckable={treeCheckable}
                treeCheckStrictly={treeCheckStrictly}
                filterTreeNode={filterTreeNode}
                treeNodeFilterProp={treeNodeFilterProp}
                treeNodeLabelProp={treeNodeLabelProp}
                treeData={treeData}
                treeDataSimpleMode={treeDataSimpleMode}
                loadData={loadData}
                getPopupContainer={getPopupContainer}
                style={style}
            >

                {answers.map((answer) => {
                    function renderChildren(children, disableTree) {
                        if (children[0] == null) {
                            return null
                        }
                        return (
                            children.map((childAnswer) => {
                                const disableChildren = (childAnswer[answer_value_key] + '' === disabled_value) || disableTree;
                                return (
                                    <TreeNode
                                        key={childAnswer.id}
                                        value={childAnswer[answer_value_key] + '' || ''}
                                        disabled={(childAnswer[answer_disabled_key] !== answer_falsify_disabled_key) || disableChildren}
                                        title={childAnswer[answer_description_key]}
                                    >
                                        {renderChildren(childAnswer[answer_children_key], disableChildren)}
                                    </TreeNode>
                                )
                            }))
                    }
                    const disableTree = (answer[answer_value_key] + '' === disabled_value);
                    return (
                        <TreeNode
                            key={answer.id}
                            value={answer[answer_value_key] + '' || ''}
                            disabled={(answer[answer_disabled_key] !== answer_falsify_disabled_key) || disableTree}
                            title={answer[answer_description_key]}
                        >
                            {renderChildren(answer[answer_children_key], disableTree)}
                        </TreeNode>
                    )

                })}

            </TreeSelect>
        </FormItem>
    );
};

InputSearchSelect.defaultProps = {
    required: false,
    hasFeedback: false,
    colon: true,

    multiple: false,
    allowClear: false,
    placeholder: 'Please Select',
    searchPlaceholder: 'Search...',
    size: 'default',
    showSearch: true,
    disabled: false,
    showCheckedStrategy: TreeSelect.SHOW_CHILD,
    treeDefaultExpandAll: true,
    treeCheckable: false,
    treeCheckStrictly: false,
    treeNodeFilterProp: 'title',
    treeNodeLabelProp: 'title',
    treeDataSimpleMode: false,

    answer_value_key: 'value',
    answer_children_key: 'children',
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
    onSelect: PropTypes.func,
    allowClear: PropTypes.bool,
    onSearch: PropTypes.func,
    placeholder: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    dropdownStyle: PropTypes.bool,
    dropdownMatchSelectWidth: PropTypes.bool,
    size: PropTypes.string,
    showSearch: PropTypes.bool,
    disabled: PropTypes.bool,
    showCheckedStrategy: PropTypes.string,
    treeDefaultExpandAll: PropTypes.bool,
    treeDefaultExpandedKeys: PropTypes.array,
    treeCheckable: PropTypes.bool,
    treeCheckStrictly: PropTypes.bool,
    filterTreeNode: PropTypes.func,
    treeNodeFilterProp: PropTypes.string,
    treeNodeLabelProp: PropTypes.string,
    treeData: PropTypes.array,
    treeDataSimpleMode: PropTypes.bool,
    loadData: PropTypes.func,
    getPopupContainer: PropTypes.func,
    style: PropTypes.object,

    answers: PropTypes.array.isRequired,
    answer_value_key: PropTypes.string,
    answer_children_key: PropTypes.string,
    answer_description_key: PropTypes.string,
    answer_disabled_key: PropTypes.string,
    answer_falsify_disabled_key: PropTypes.bool,
    disabled_value: PropTypes.string,

};

export default InputSearchSelect;
