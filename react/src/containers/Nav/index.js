import { connect } from 'react-redux';
import './reducer';

import Nav from './component';
import * as authSelectors from '../Auth/selectors';
import * as authActions from '../Auth/actions';
import * as actions from './actions';
import selectors from './selectors';


const mapStateToProps = (state) => {
    const user = authSelectors.getAuthUser(state);
    return {
        user: user,
        collapsed: selectors.toggleNav(state),
        mode: selectors.getNavMode(state),
        selectedNavKey: selectors.defaultNavKey(state),
        pageTitle: selectors.defaultPageTitle(state),
        breadcrumbs: selectors.defaultBreadcrumbs(state),
        openKeys: selectors.defaultOpenKeys(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: authActions.logout(dispatch),
        toggleNav: actions.toggleNav(dispatch),
        setBreadcrumbs: actions.setBreadcrumbs(dispatch),
        getAuthKey: authActions.getAuthKey(dispatch),
        setPageTitle: actions.setPageTitle(dispatch),
        handleSubNavClick: actions.handleSubNavClick(dispatch)
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);



