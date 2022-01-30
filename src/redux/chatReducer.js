import {chatActionTypes} from "./types";


export let initialState = {
    messages: [],
    rooms: [],
    activeRoom: ''
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
        case chatActionTypes.REMOVE_ACTIVE_ROOM: {
            return {
                ...state,
                rooms: state.rooms.filter((room, roomId) => roomId !== action.payload),
                activeRoom: ''
            }
        }
        default:
            return state
    }
}

export default chatReducer