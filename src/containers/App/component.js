import React, { Component, PropTypes } from 'react'

import logo from './logo.svg';
import './App.css';


//NOTE this should always be a class
//it can easily be a functional component, but hot-reloading does not allow for it
class App extends Component {
    render() {
        const {children} = this.props;

        return (
            <div>
                <img className="App-logo" src={logo} alt="logo" />
                {children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.node
};

export default App;
