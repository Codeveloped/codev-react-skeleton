var selectors = {};

selectors.toggleNav = function (state) {
    return state.nav.collapsed;
};

selectors.getNavMode = function (state) {
    return state.nav.mode;
};

selectors.defaultNavKey = function (state) {
    return state.nav.selectedNavKey;
};

selectors.defaultPageTitle = function (state) {
    return state.nav.pageTitle;
};

selectors.defaultBreadcrumbs = function (state) {
    return state.nav.breadcrumbs;
};

selectors.defaultOpenKeys = function (state) {
    return state.nav.openKeys;
};

export default selectors;
