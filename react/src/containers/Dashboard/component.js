import React, {Component} from 'react';

class Dashboard extends Component {

    componentWillMount() {
        this.props.setPageTitle("Dashboard");
        this.props.setBreadcrumbs([]);
    }

    render() {

        return (
            <div>
                <h1>Welcome!</h1>
                <span>This dashboard is under construction</span>
            </div>
        )

    }
}


// Dashboard.propTypes = {
// };

Dashboard.contextTypes = {
    router: React.PropTypes.object.isRequired,
};


export default Dashboard;
