import {userAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.post,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        }
        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPost = (post) => ({type: ADD_POST, post})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => async (dispatch) => {
    let data = await userAPI.getProfile(userId);
    dispatch(setProfile(data));
}
export const getStatus = (id) => async (dispatch) => {
    let data = await userAPI.getStatus(id);
    dispatch(setStatus(data));
}
export const changeStatus = (status) => async (dispatch) => {
    let data = await userAPI.setStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;