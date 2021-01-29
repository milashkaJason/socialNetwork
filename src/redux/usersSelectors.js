import { createSelector } from "reselect"


export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCount = (state) => {
    return state.usersPage.count
}
export const getPage = (state) => {
    return state.usersPage.page
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSuper = createSelector(getUsers, (users)=> {
    return users.filter(u=> true)
})