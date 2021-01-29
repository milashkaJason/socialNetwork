import React from 'react';
import {Redirect} from "react-router";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        inAuth: state.auth.inAuth

    }
}
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.inAuth) return <Redirect to="/login" />
            return <Component {...this.props} />

        }
    }
    return connect(mapStateToProps)(RedirectComponent);
}