import React, { PropTypes } from 'react'
import { Button } from 'antd';


const InputButton = ({
    type,
    htmlType,
    children,
    icon,
    shape,
    size,
    loading,
    ghost,
    disabled,
    onClick,
    onBlur,
    onDragStart,
    onDrop,
    onFocus,
    className,
}) => {
    return (
        <Button
            type={type}
            htmlType={htmlType}
            icon={icon}
            shape={shape}
            size={size}
            loading={loading}
            ghost={ghost}
            disabled={disabled}
            onClick={onClick}
            onBlur={onBlur}
            onDragStart={onDragStart}
            onDrop={onDrop}
            onFocus={onFocus}
            className={className}
        >
            {children}
        </Button>
    );
};

InputButton.defaultProps = {
    type: 'primary', // primary dashed danger
    htmlType: 'button',
    size: 'default', // 'small', 'large'
    loading: false,
    ghost: false,

};

InputButton.propTypes = {
    type: PropTypes.string,
    htmlType: PropTypes.string,
    children: PropTypes.any.isRequired,
    icon: PropTypes.string,
    shape: PropTypes.string,
    size: PropTypes.string,
    loading: PropTypes.bool,
    ghost: PropTypes.bool,
    disable: PropTypes.bool,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    className: PropTypes.string,
};

export default InputButton;
