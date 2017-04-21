import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import routes from '../../routes'

import './site.css';


export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <LocaleProvider locale={enUS}>
                <Provider store={store}>
                    <div>
                        <Router history={history} routes={routes} />
                    </div>
                </Provider>
            </LocaleProvider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
