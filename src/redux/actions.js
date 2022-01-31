import {authActionTypes, chatActionTypes} from './types';

export const setRegisterUser = (data) => ({
    type: authActionTypes.SET_REGISTER_USER,
    payload: data
})

export const setCurrentUser = (data) => ({
    type: authActionTypes.SET_CURREN_USER,
    payload: data
})

export const setMessages = (data) => ({
    type: chatActionTypes.SET_MESSAGES,
    payload: data
})

export const setActiveRoom = (data) => ({
    type: chatActionTypes.SET_ACTIVE_ROOM,
    payload: data
})

export const removeRoom = (data) => ({
    type: chatActionTypes.REMOVE_ROOM,
    payload: data
})

export const setRooms = (data) => ({
    type: chatActionTypes.SET_ROOMS,
    payload: data
})

export const addRoom = (data) => ({
    type: chatActionTypes.ADD_ROOM,
    payload: data
})

export const editMessage = (data) => ({
    type: chatActionTypes.EDIT_MESSAGE,
    payload: data
})

export const removeMessage = (data) => ({
    type: chatActionTypes.REMOVE_MESSAGE,
    payload: data
})

export const setTyping = (data) => ({
    type: chatActionTypes.SET_TYPING,
    payload: data
})

export const clearTyping = () => ({
    type: chatActionTypes.CLEAR_TYPING
})