import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Nav/actions';


class MainNavHelper extends Component {
    componentWillMount() {
        this.props.changeMainNav(this.props.mainNavItem);
    }

    render() {
        const Component = this.props.component;
        return <Component {...this.props} />;
    }
}


MainNavHelper.propTypes = {
    changeMainNav: PropTypes.func.isRequired,
    mainNavItem: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
};


export default connect(
    () => {
        return {}
    },
    (dispatch) => {
        return { changeMainNav: actions.changeMainNav(dispatch) }
    }
)(MainNavHelper);