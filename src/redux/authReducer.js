import {authActionTypes} from "./types";


export let initialState = {
    registerData: {
        firstName: '',
        lastName: '',
        password: '',
        email: ''
    },
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.SET_REGISTER_USER: {
            return {
                ...state,
                registerData: {...action.payload}
            }
        }
        case authActionTypes.SET_CURREN_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state
    }
}

export default authReducer