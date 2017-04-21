import * as types from './types';

export function toggleNav(dispatch) {
    return function (collapsed=false) {
        dispatch({
            type: types.TOGGLE_NAV,
            collapsed: collapsed,
        })
    }
}

export function changeMainNav(dispatch) {
    return function (mainNavItem='') {
        dispatch({
            type: types.SET_NAV_ITEM,
            mainNavItem: mainNavItem
        })
    }
}

export function handleSubNavClick(dispatch) {
    return function (openKeys) {
        dispatch({
            type: types.HANDLE_SUB_NAV,
            openKeys: openKeys
        })
    }
}

export function setPageTitle(dispatch) {
    return function (pageTitle='') {
        dispatch({
            type: types.SET_PAGE_TITLE,
            pageTitle: pageTitle
        })
    }
}

export function setBreadcrumbs(dispatch) {
    return function (breadcrumbs=[]) {
        dispatch({
            type: types.SET_BREADCRUMBS,
            breadcrumbs: breadcrumbs
        })
    }
}
