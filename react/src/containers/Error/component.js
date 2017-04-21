import React, {Component, PropTypes} from 'react';
import AlertContainer from 'react-alert';

let msg;


class ErrorComponent extends Component {
    render() {
        const {error} = this.props;

        const alertOptions = {
            offset: 14,
            position: 'bottom left',
            theme: 'dark',
            time: 5000,
            transition: 'scale'
        };

        if (error) {
            // Todo: Move error formatting to reducer.
            msg.show(error.json || error.detail || error.slice(0, 160), {
                time: 2000,
                type: 'error'
            })
        }

        return (
            <AlertContainer ref={(a) => {msg = a; return msg;} } {...alertOptions} />
        )

    }

}


ErrorComponent.propTypes = {
    error: PropTypes.any
};


export default ErrorComponent;
