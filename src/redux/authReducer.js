export const types = {
    SET_REGISTER_USER: 'SET_REGISTER_USER'
}

export let initialState = {
    registerData: {
        firstName: '',
        lastName: '',
        password: '',
        email: ''
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_REGISTER_USER: {
            return {
                ...state,
                registerData: {...action.payload}
            }
        }
        default:
            return state
    }
}

export default authReducer