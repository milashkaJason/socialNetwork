import React from 'react';
import Preloader from "../../common/preloader/preloader";
import Paginator from "../../common/paginator/paginator";
import User from "./user";

let Users = (props) => {

    if (!props.users) {
        return <Preloader/>
    }

    return <>
        <User users={props.users}
              unfollow={props.unfollow}
              follow={props.follow}/>

        <Paginator page={props.page}
                   totalUsersCount={props.totalUsersCount}
                   count={props.count}
                   onClick={props.onClick}
                   portionSize={20}/>

    </>
}

export default Users;