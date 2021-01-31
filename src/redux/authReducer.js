import {stopSubmit} from "redux-form";
import {userAPI} from "../api/api";

const SET_USER = 'SET_USER';
const IN_AUTH = 'IN_AUTH';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    inAuth: false,
    urlToCaptcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {...state, ...action.data}
        }
        case IN_AUTH: {
            return {
                ...state,
                inAuth: action.inAuth
            }
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                urlToCaptcha: action.urlToCaptcha
            }
        }
        default:
            return state;
    }
}

export const setUser = (userId, login, email) => ({type: SET_USER, data: {userId, login, email}})
export const inAuth = (inAuth) => ({type: IN_AUTH, inAuth})
export const setCaptcha = (urlToCaptcha) => ({type: SET_CAPTCHA, urlToCaptcha})

export const inAuthCheck = () => async (dispatch) => {
    const data = await userAPI.inAuth();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUser(id, login, email));
        dispatch(inAuth(true));
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await userAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(inAuthCheck());
    } else {
        if(data.resultCode === 10) {
            dispatch(getCaptcha());
        }
        const error = data.messages ? data.messages[0] : 'some error';
        dispatch(stopSubmit('login', {_error: error}));
    }
}
export const logout = () => async (dispatch) => {
    const data = await userAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUser(null, null, null));
        dispatch(inAuth(false));
    }
}
export const getCaptcha = () => async (dispatch) => {
    const data = await userAPI.getCaptcha();
        dispatch(setCaptcha(data.url));
}

export default authReducer;