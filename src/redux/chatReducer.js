import {chatActionTypes} from "./types";


export let initialState = {
    messages: [],
    rooms: [],
    activeRoom: null,
    typingIn: null
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
                rooms: [...action.payload],
                activeRoom: state.activeRoom
                    ? action.payload.find(room => room.id === state.activeRoom.id)
                    : null
            }
        }
        case chatActionTypes.ADD_ROOM: {
            return {
                ...state,
                rooms: [...state.rooms, action.payload]
            }
        }
        case chatActionTypes.EDIT_MESSAGE: {
            return {
                ...state,
                messages: state.messages.map(msg => {
                    console.log(msg)
                    if (msg.id === action.payload.id) msg.text = action.payload.text
                    return msg
                })
            }
        }
        case chatActionTypes.REMOVE_MESSAGE: {
            return {
                ...state,
                messages: state.messages.filter((msg) => msg.id !== action.payload)
            }
        }
        case chatActionTypes.SET_TYPING: {
            return {
                ...state,
                typingIn: {...action.payload}
            }
        }
        case chatActionTypes.CLEAR_TYPING: {
            return {
                ...state,
                typingIn: null
            }
        }
        default:
            return state
    }
}

export default chatReducer