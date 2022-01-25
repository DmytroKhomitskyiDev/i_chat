import {types} from './types';

export const setRegisterUser = (data) => ({
    type: types.SET_REGISTER_USER,
    payload: data
})

export const setCurrentUser = (data) => ({
    type: types.SET_CURREN_USER,
    payload: data
})