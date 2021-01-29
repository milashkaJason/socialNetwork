import { inAuthCheck } from "./authReducer";

const INITIALIZED_SECCESS = 'INITIALIZED_SECCESS';



let initialState = {
    innitialized: false
};

const appReducer = (state = initialState, action) => {
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

export const initializedSeccess = () => ({ type: INITIALIZED_SECCESS });

export const initializeApp = () => (dispatch) => {
         let promise = dispatch(inAuthCheck());
         Promise.all([promise])
         .then(() => {
             dispatch(initializedSeccess());
         });
}


export default appReducer;