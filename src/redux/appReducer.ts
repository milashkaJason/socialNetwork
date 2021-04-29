import { inAuthCheck } from "./authReducer";

const INITIALIZED_SECCESS = 'INITIALIZED_SECCESS';



let initialState = {
    innitialized: false as boolean
};
export type initialStateType = typeof initialState

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SECCESS:
            return {
                ...state,
                innitialized: true
            }

        default:
            return state;
    }
}
type initializedSuccess = {
    type: typeof INITIALIZED_SECCESS
}
export const initializedSeccess = (): initializedSuccess => ({ type: INITIALIZED_SECCESS });

export const initializeApp = () => (dispatch: any) => {
         let promise = dispatch(inAuthCheck());
         Promise.all([promise])
         .then(() => {
             dispatch(initializedSeccess());
         });
}


export default appReducer;