import React from "react";
import {connect} from 'react-redux';
import {compose} from "redux";
import Preloader from "../../common/preloader/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {follow, getUsers, setPage, unfollow} from '../../redux/usersReducer';
import {getCount, getIsFetching, getPage, getTotalUsersCount, getUsersSuper} from "../../redux/usersSelectors";
import Users from "./users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.count, this.props.page);
    }

    onClick = (pageNumber) => {
        this.props.setPage(pageNumber);
        this.props.getUsers(this.props.count, pageNumber);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users page={this.props.page}
                       onClick={this.onClick}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       totalUsersCount={this.props.totalUsersCount}
                       count={this.props.count}
                       isFetching={this.props.isFetching}
                />
            </>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        totalUsersCount: getTotalUsersCount(state),
        count: getCount(state),
        page: getPage(state),
        isFetching: getIsFetching(state)

    }
}

export default compose(
    connect(mapStateToProps, {unfollow, follow, getUsers, setPage}),
    withAuthRedirect)(UsersContainer)


