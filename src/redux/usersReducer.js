import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const PAGE_NUMBER = 'PAGE_NUMBER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [],
    count: 10,
    page: 1,
    totalUsersCount: null,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case PAGE_NUMBER:
            return {...state, page: action.pageNumber}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const followChange = (id) => ({type: FOLLOW, id})
export const unfollowChange = (id) => ({type: UNFOLLOW, id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalCount) => ({type: TOTAL_USERS_COUNT, totalCount})
export const setPage = (pageNumber) => ({type: PAGE_NUMBER, pageNumber})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getUsers = (count, page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await userAPI.getUsers(count, page);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}
export const follow = (id) => async (dispatch) => {
    let data = await userAPI.followSuccess(id);
    if (data.resultCode === 0) {
        dispatch(followChange(id));
    }
}
export const unfollow = (id) => async (dispatch) => {
    let data = await userAPI.unfollowSuccess(id);
    if (data.resultCode === 0) {
        dispatch(unfollowChange(id));
    }
}

export default usersReducer;
