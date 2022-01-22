import {types} from './authReducer';

export const setRegisterUser = (data) => ({
    type: types.SET_REGISTER_USER,
    payload: data
})