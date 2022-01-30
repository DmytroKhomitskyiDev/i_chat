import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import chatReducer from "./chatReducer";

export const reducers = combineReducers({
    auth: authReducer,
    chat: chatReducer
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store