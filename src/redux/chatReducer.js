import {chatActionTypes} from "./types";


export let initialState = {
    messages: [],
    rooms: [],
    activeRoom: null
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case chatActionTypes.SET_MESSAGES: {
            return {
                ...state,
                messages: [...action.payload]
            }
        }
        case chatActionTypes.SET_ACTIVE_ROOM: {
            return {
                ...state,
                activeRoom: action.payload
            }
        }
        case chatActionTypes.REMOVE_ROOM: {
            return {
                ...state,
                rooms: state.rooms.filter((room) => room.id !== action.payload),
                activeRoom: null
            }
        }
        case chatActionTypes.SET_ROOMS: {
            return {
                ...state,
                rooms: [...action.payload]
            }
        }
        case chatActionTypes.ADD_ROOM: {
            return {
                ...state,
                rooms: [...state.rooms, action.payload]
            }
        }
        default:
            return state
    }
}

export default chatReducer