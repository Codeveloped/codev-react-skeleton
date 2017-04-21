import {connect} from 'react-redux';
import './reducer';
import Component from './component';

// import * as actions from './actions';
import * as navActions from '../Nav/actions';
import selectors from './selectors';


const mapStateToProps = (state) => {
    return {
        loading: selectors.getLoading(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPageTitle: navActions.setPageTitle(dispatch),
        setBreadcrumbs: navActions.setBreadcrumbs(dispatch),
    }
};


const Connected = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default Connected;
