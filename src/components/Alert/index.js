import React, { PropTypes } from 'react';


const Notify = ({
    type,
    children
}) => {
    return <div className={'alert alert-' + type} role="alert">{children}</div>;
};

Notify.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired
};


export const Warning = ({...props}) => { return <Notify type={'warning'} {...props}/>; };

Warning.propTypes = {
    children: PropTypes.any.isRequired
};


export const Info = ({...props}) => { return <Notify type={'info'} {...props}/>; };

Info.propTypes = {
    children: PropTypes.any.isRequired
};


export const Danger = ({...props}) => { return <Notify type={'danger'} {...props}/>; };

Danger.propTypes = {
    children: PropTypes.any.isRequired
};


export const Success = ({...props}) => { return <Notify type={'success'} {...props}/>; };

Success.propTypes = {
    children: PropTypes.any.isRequired
};

