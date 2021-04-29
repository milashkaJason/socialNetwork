// import {stopSubmit} from "redux-form";
import {userAPI} from "../api/api";

const SET_USER = 'SET_USER';
const IN_AUTH = 'IN_AUTH';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    userId: null as number | null,
    login: null as number | null,
    email: null as number | null,
    inAuth: false as boolean,
    urlToCaptcha: null as number | null
};
export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {
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
type data = {
    userId: number,
    login: string,
    email: string,
}
type setUserActionType = {
    type: typeof SET_USER,
    data: data
}
export const setUser = (userId: number, login: string, email: string): setUserActionType =>
    ({
        type: SET_USER,
        data:
            {
                userId,
                login,
                email,
            }
    })
type inAuthActionType = {
    type: typeof IN_AUTH,
    inAuth: boolean
}
export const inAuth = (inAuth: boolean): inAuthActionType => ({type: IN_AUTH, inAuth})
type setCaptchaActionType = {
    type: typeof SET_CAPTCHA,
    urlToCaptcha: string
}
export const setCaptcha = (urlToCaptcha: string):setCaptchaActionType => ({type: SET_CAPTCHA, urlToCaptcha})

export const inAuthCheck = () => async (dispatch: any) => {
    const data = await userAPI.inAuth();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUser(id, login, email));
        dispatch(inAuth(true));
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    const data = await userAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(inAuthCheck());
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptcha());
        }
        // const error = data.messages ? data.messages[0] : 'some error';
        // dispatch(stopSubmit('login', {_error: error}));
    }
}
export const logout = () => async (dispatch: any) => {
    const data = await userAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUser(0, '', ''));
        dispatch(inAuth(false));
    }
}
export const getCaptcha = () => async (dispatch: any) => {
    const data = await userAPI.getCaptcha();
    dispatch(setCaptcha(data.url));
}

export default authReducer;