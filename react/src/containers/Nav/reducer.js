import {addReducer} from '../../reducers';

import {
    TOGGLE_NAV,
    SET_NAV_ITEM,
    SET_PAGE_TITLE,
    SET_BREADCRUMBS,
    HANDLE_SUB_NAV,
} from './types';


const initialState = {
    collapsed: false,
    mode: "inline",
    selectedNavKey: "",
    pageTitle: "",
    // Breadcrumb: {path: '/attributes/', name: "Attribute", noLink: false}
    breadcrumbs: [],
    openKeys: ['sub1']
};

const reducer = function (state = initialState, action = {}) {

    switch (action.type) {
        case TOGGLE_NAV:
            return {
                ...state,
                collapsed: action.collapsed,
                mode: action.collapsed ? "vertical" : "inline",
                openKeys: action.collapsed ? [] : ["sub1"],
            };
        case SET_NAV_ITEM:
            return {
                ...state,
                selectedNavKey: action.mainNavItem
            };
        case HANDLE_SUB_NAV:
            return {
                ...state,
                openKeys: action.openKeys
            };
        case SET_PAGE_TITLE:
            return {
                ...state,
                pageTitle: action.pageTitle
            };
        case SET_BREADCRUMBS:
            return {
                ...state,
                breadcrumbs: action.breadcrumbs
            };
        default:
            return state;
    }
};

addReducer('nav', reducer);

export default reducer;

