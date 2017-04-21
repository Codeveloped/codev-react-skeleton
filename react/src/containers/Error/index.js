import {connect} from 'react-redux';

import Component from './component';
import './reducer';



const mapStateToProps = (state) => {
    return {
        error: state.error.error,
        realError: state.error.realError,
        showError: state.error.showError,
    }
};

const Connected = connect(
    mapStateToProps,
)(Component);

export default Connected;

