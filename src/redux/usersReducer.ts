import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const PAGE_NUMBER = 'PAGE_NUMBER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [] as any,
    count: 10,
    page: 1,
    totalUsersCount: 0,
    isFetching: false
};
type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true} )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true} )
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


type followChangeActionType = {
    type: typeof FOLLOW,
    id: number
}
export const followChange = (id: number): followChangeActionType => ({type: FOLLOW, id})

type unfollowChangeActionType = {
    type: typeof UNFOLLOW,
    id: number
}
export const unfollowChange = (id: number): unfollowChangeActionType => ({type: UNFOLLOW, id})

type setUsersActionType = {
    type: typeof SET_USERS,
    users: any
}
export const setUsers = (users: any): setUsersActionType => ({type: SET_USERS, users})

type setTotalUsersCountActionType = {
    type: typeof TOTAL_USERS_COUNT,
    totalCount: number
}
export const setTotalUsersCount = (totalCount: number): setTotalUsersCountActionType => ({type: TOTAL_USERS_COUNT, totalCount})

type setPageActionType = {
    type: typeof PAGE_NUMBER,
    pageNumber: number
}
export const setPage = (pageNumber: number): setPageActionType => ({type: PAGE_NUMBER, pageNumber})

type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})



export const getUsers = (count: number, page: number) => async (dispatch:any) => {
    dispatch(toggleIsFetching(true));
    let data = await userAPI.getUsers(count, page);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}
export const follow = (id: number) => async (dispatch: any) => {
    let data = await userAPI.followSuccess(id);
    if (data.resultCode === 0) {
        dispatch(followChange(id));
    }
}
export const unfollow = (id: number) => async (dispatch: any) => {
    let data = await userAPI.unfollowSuccess(id);
    if (data.resultCode === 0) {
        dispatch(unfollowChange(id));
    }
}

export default usersReducer;
