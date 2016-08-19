import React, { PropTypes } from 'react';
import {modal} from 'react-redux-modal';

import InputButton from '../Input/Button';


const ModalComponent = ({
    title,
    body,
    yes,
    no,
    handler,
    removeModal
}) => {
    const removeMeAnd = (action) => {
        return () => {
            removeModal();
            action();
        }
    };
    return (
        <div>
            <h3>{title}</h3>
            {body}
            <InputButton onClick={removeMeAnd(handler.bind(null, true))}>{yes}</InputButton>
            <InputButton onClick={removeMeAnd(handler.bind(null, false))}>{no}</InputButton>
        </div>
    )
};


ModalComponent.propTypes = {
    title: PropTypes.any.isRequired,
    body: PropTypes.any.isRequired,
    yes: PropTypes.any.isRequired,
    no: PropTypes.any.isRequired,
    handler: PropTypes.func.isRequired
};


const YesNo = ({
    title,
    body,
    yes,
    no,
    handler
}) => {
    modal.add(ModalComponent, {
        title: title,
        body: body,
        yes: yes,
        no: no,
        handler: handler,
        
        size: 'medium',
        hideCloseButton: true,
        closeOnOutsideClick: false
    });
    
    return [];
};

YesNo.propTypes = {
    title: PropTypes.any.isRequired,
    body: PropTypes.any.isRequired,
    yes: PropTypes.any.isRequired,
    no: PropTypes.any.isRequired,
    handler: PropTypes.func.isRequired
};


export default YesNo;
