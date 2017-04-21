import React from 'react';
import {initRoutes} from '../lib/routes';

import Nav from '../containers/Nav';
import Dashboard from '../containers/Dashboard';
import MainNavHelper from '../containers/MainNavHelper';


export default initRoutes({
    component: Nav,
    childRoutes: [
        {
            path: '/',
            component: (props) => <MainNavHelper mainNavItem="" component={Dashboard} {...props} />,
            name: 'Home'
        },
    ]
})
