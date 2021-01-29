import React from "react";
import { connect } from "react-redux";
import { inAuthCheck, logout } from "../../redux/authReducer";
import Header from "./header";

class HeaderContainer extends React.Component {

    render () {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        inAuth: state.auth.inAuth
    }
}

export default connect(mapStateToProps, {inAuthCheck, logout})(HeaderContainer)