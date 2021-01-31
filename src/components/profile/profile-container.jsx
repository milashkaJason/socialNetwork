import React from "react";
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {compose} from "redux";
import {addPost, changeStatus, getProfile, getStatus, savePhoto} from '../../redux/profileReducer';
import Profile from './profile';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.UserId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isowner={!this.props.match.params.userId}
                     posts={this.props.posts}
                     newPostText={this.props.newPostText}
                     addPost={this.props.addPost}
                     profile={this.props.profile}
                     status={this.props.status}
                     changeStatus={this.props.changeStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        userId: state.auth.userId,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {addPost, getProfile, changeStatus, getStatus, savePhoto}),
    withRouter
    // withAuthRedirect
)(ProfileContainer)

