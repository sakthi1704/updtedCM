import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
    class NotAuthentication extends Component {
        PropTypes = {
            router: PropTypes.object,
        };

        componentWillMount() {
            if (this.props.authenticated) {
                this.props.history.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (nextProps.authenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {authenticated: state.auth.authenticated, userRole: state.auth.userRole};
    }

    return connect(mapStateToProps)(NotAuthentication);
}