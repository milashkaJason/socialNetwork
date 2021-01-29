import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from "./usersReducer";


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunk));
export default store;