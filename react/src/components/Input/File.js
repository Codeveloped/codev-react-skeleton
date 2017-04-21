import React, { PropTypes } from 'react'
import { Form } from 'antd';
import Dropzone from 'react-dropzone';

const FormItem = Form.Item;


const InputFile = ({
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

    //Dropzone
    multiple,

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

    // Todo: Build specifically for AH to handle a single file from url instead of File obj
    const files = input.value;

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
            className="dropzone-form-item"
        >
            <Dropzone
                name={input.name}
                onDrop={( filesToUpload, e ) => input.onChange(filesToUpload)}
                multiple={multiple}
                className="dropzone"
                activeClassName="dropzone-active"
                rejectClassName="dropzone-reject"
            >
                <div>Drop your files here</div>
            </Dropzone>
            
            {files && Array.isArray(files) && (
                <ul className="dropzone-filelist">
                    { files.map((file, i) => <li key={i}><a href={file.preview}>{file.name}</a></li>) }
                </ul>
            )}
            {files && !Array.isArray(files) && (
                <ul className="dropzone-filelist">
                    <li><a href={files}>{files}</a></li>
                </ul>
            )}
        </FormItem>
    );
};

InputFile.defaultProps = {
    required: false,
    hasFeedback: false,
    colon: true,

    multiple: false,
};

InputFile.propTypes = {
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

    //Dropzone
    multiple: PropTypes.bool,

};

export default InputFile;
