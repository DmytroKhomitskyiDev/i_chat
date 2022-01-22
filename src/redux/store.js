import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";

export const reducers = combineReducers({
    auth: authReducer
})

let store = createStore(reducers,applyMiddleware(thunk))

export default store