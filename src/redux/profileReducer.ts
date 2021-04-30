import {userAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null as any,
    status: ''
};

const profileReducer = (state = initialState, action: any) => {
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
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
}
type addPostActionType = {
    type: typeof ADD_POST,
    post: string
}
export const addPost = (post: string): addPostActionType => ({type: ADD_POST, post})

type setProfileActionType = {
    type: typeof SET_PROFILE,
    profile: any
}
export const setProfile = (profile: any): setProfileActionType => ({type: SET_PROFILE, profile})

type setStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}
export const setStatus = (status: string): setStatusActionType => ({type: SET_STATUS, status})

type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: any
}
export const savePhotoSuccess = (photos: any): savePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (userId: number) => async (dispatch: any) => {
    let data = await userAPI.getProfile(userId);
    dispatch(setProfile(data));
}
export const getStatus = (id: number) => async (dispatch: any) => {
    let data = await userAPI.getStatus(id);
    dispatch(setStatus(data));
}
export const changeStatus = (status: string) => async (dispatch: any) => {
    let data = await userAPI.setStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let data = await userAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
}

export default profileReducer;