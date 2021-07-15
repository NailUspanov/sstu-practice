import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "../reducers/pageMessagesReducer.js";
import profileReducer from "../reducers/pageProfileReducer";
import usersReducer from "../reducers/usersReducer";
import authReducer from "../reducers/authReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    pageMessages: messagesReducer,
     pageProfile: profileReducer,
       pageUsers: usersReducer,
            auth: authReducer,

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
