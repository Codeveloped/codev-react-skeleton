import React, { PropTypes } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw, EditorState, ContentState, convertFromHTML} from 'draft-js';
import { Form } from 'antd';

const FormItem = Form.Item;

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class InputRichText extends React.Component {

    constructor() {
        super();
        this.handleEditorStateChange = this.handleEditorStateChange.bind(this);
        this.initialRender = false;
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    convertToHTML(editorState) {
        return draftToHtml(convertToRaw(editorState.getCurrentContent()));
    }

    convertToContent(html) {
        const contentBlocks = convertFromHTML(html);
        const contentState = ContentState.createFromBlockArray(contentBlocks);
        this.setState({ editorState: EditorState.createWithContent(contentState) });
    }

    handleEditorStateChange(editorState) {
        const { onChange } = this.props.input;
        const html = this.convertToHTML(editorState);

        this.setState({ editorState });
        onChange(html);
    }

    componentWillReceiveProps(nextProps) {
        if (!this.initialRender) {
            this.initialRender = true;
            this.convertToContent(nextProps.input.value);
        }
    }

    render() {

        const {label, labelCol, wrapperCol, help, extra, required, validateStatus, hasFeedback, colon} = this.props;

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
                <Editor
                    editorState={this.state.editorState}
                    onEditorStateChange={this.handleEditorStateChange}
                    toolbar={{
                        options: ['history', 'remove', 'link', 'textAlign', 'list', 'fontFamily', 'fontSize', 'blockType', 'inline'],
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                    }}
                />
            </FormItem>
        );
    }
}

InputRichText.propTypes = {
    //Redux-form Field
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,

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

};
InputRichText.defaultProps = {
    required: false,
    hasFeedback: false,
    colon: true,
};

export default InputRichText;


