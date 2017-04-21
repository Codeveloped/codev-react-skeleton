import React, {Component, PropTypes} from 'react'
import { Menu, Breadcrumb, Icon, Layout } from 'antd';
import {Link} from 'react-router';

import Login from '../Auth';
import ErrorComponent from '../Error';

import {resolveRoute} from '../../lib/routes';

import logo from '../../assets/img/logo.svg';

const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Nav extends Component {

    renderBreadcrumbs(breadcrumbs) {
        const bc = breadcrumbs.map((breadcrumb, idx) => {
            if (breadcrumb.path) return <Breadcrumb.Item key={idx}><Link to={breadcrumb.path}>{breadcrumb.name}</Link></Breadcrumb.Item>;
            if (!breadcrumb.path) return <Breadcrumb.Item key={idx}>{breadcrumb.name}</Breadcrumb.Item>;
            return '';
        });

        return (
            <Breadcrumb>
                <Breadcrumb.Item><Link to={resolveRoute('Home')}>Home</Link></Breadcrumb.Item>
                {bc}
            </Breadcrumb>
        )};

    render() {
        const {children, user, mode, collapsed, selectedNavKey, pageTitle, openKeys, breadcrumbs} = this.props;

        if (!user || !user.token) {
            return (
                <div id="root-container">
                    <ErrorComponent/>
                    <Login/>
                </div>
            )
        }

        return (
            <div id="root-container">
                <ErrorComponent/>
                <Layout>
                    <Sider
                        collapsible={true}
                        collapsed={collapsed}
                        onCollapse={this.props.toggleNav}
                        className="ant-has-sider-trigger"
                    >
                        <div className="layout-logo"><img src={logo} alt="AH"/>{/*<span className="layout-logo-text">ExPAND</span>*/}</div>
                        <Menu theme="dark" mode={mode} selectedKeys={[selectedNavKey]} onOpenChange={this.props.handleSubNavClick} openKeys={openKeys}>
                            <SubMenu key="sub1" title={<span><Icon type="folder" /><span className="nav-text">Product Management</span></span>}>
                                <Menu.Item key="products"><Link to={resolveRoute('Products')}>Products</Link></Menu.Item>
                                <Menu.Item key="attributes"><Link to={resolveRoute('Attributes')}>Attributes</Link></Menu.Item>
                                <Menu.Item key="templates"><Link to={resolveRoute('Templates')}>Templates</Link></Menu.Item>
                                <Menu.Item key="categories"><Link to={resolveRoute('Categories')}>Categories</Link></Menu.Item>
                                <Menu.Item key="locations"><Link to={resolveRoute('Locations')}>Locations</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="shopping-cart" /><span className="nav-text">Stock Management</span></span>}>
                                <Menu.Item key="stocks"><Link to={resolveRoute('Stocks')}>Stocks</Link></Menu.Item>
                                <Menu.Item key="orders"><Link to={resolveRoute('Orders')}>Orders</Link></Menu.Item>
                                <Menu.Item key="suppliers"><Link to={resolveRoute('Suppliers')}>Suppliers</Link></Menu.Item>
                                <Menu.Item key="sources"><Link to={resolveRoute('Sources')}>Sources</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="setting" /><span className="nav-text">System</span></span>}>
                                <Menu.Item key="10">System Settings</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="11"><span><Icon type="logout" /><a href="#" onClick={this.props.logout}><span className="nav-text">Log out</span></a></span></Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout className="layout-main">
                        <Header className="layout-header"><h1>{pageTitle}</h1></Header>
                        <Content className="layout-container">
                            {this.renderBreadcrumbs(breadcrumbs)}

                            <div className="layout-content">
                                {children}
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }

}

Nav.propTypes = {
    children: PropTypes.node,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    collapsed: PropTypes.bool,
    mode: PropTypes.string,
    selectedNavKey: PropTypes.string,
    pageTitle: PropTypes.string,
    breadcrumbs: PropTypes.array,
    openKeys: PropTypes.array.isRequired,
};

Nav.contextTypes = {
    router: React.PropTypes.object.isRequired,
};


export default Nav;
