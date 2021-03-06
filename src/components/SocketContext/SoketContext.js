import React, {createContext, useContext, useEffect, useRef} from "react";
import {io} from "socket.io-client";
import socketActions from "./soketActions";
import {useDispatch, useSelector} from "react-redux";
import {
    addRoom, clearTyping,
    editMessage, messageStatus,
    removeMessage,
    removeRoom,
    setActiveRoom,
    setMessages, setOffline, setOnline, setTyping
} from "../../redux/actions";
import {getChatMessages} from "../../api/api";



const SocketContext = createContext({});

export const useSocket = () => {
    return useContext(SocketContext);
};

const SocketProvider= ({ children }) => {

    const socket = useRef(null);
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.auth.user)



    useEffect(() => {
        socket.current = io('http://localhost:3001', {
            auth: {
                token: localStorage.getItem('token'),
            },
        });

        socket.current.on(socketActions.ClientConnection, (res) => {
            console.log('connection: ' , res);
        });

        socket.current.on(socketActions.ClientJoin, (res) => {
            if (res.email && currentUser?.email !== res.email) setOnline(res)
        });

        socket.current.on(socketActions.ClientLeave, (res) => {
            if (res.email && currentUser?.email !== res.email) setOffline(res)
        });

        socket.current.on(socketActions.ClientCreateRoom, (room) => {
            socket.current?.emit(socketActions.ServerJoinRoom, room.id);
            dispatch(addRoom(room))
            dispatch(setActiveRoom(room))
            dispatch(setMessages([]))
        });

        socket.current.on(socketActions.ClientDeleteRoom, (id) => {
            dispatch(removeRoom(id))
        })

        socket.current.on(socketActions.ClientMessage, (message) => {
            getChatMessages(message.room, 0, 0).then((data) => {
                dispatch(setMessages(data.data))
            })
        });

        socket.current.on(socketActions.ClientUpdate, (message) => {
            dispatch(editMessage(message))
        });

        socket.current.on(socketActions.ClientDeleteMessage, (id) => {
            dispatch(removeMessage(id))
        });

        socket.current.on(socketActions.ClientStartWriting, (res) => {
            if(res.user !== currentUser.id) {
                dispatch(setTyping(res))
            }
        });

        socket.current.on(socketActions.ClientStopWriting, (res) => {
            if(res.user !== currentUser.id) {
                dispatch(clearTyping())
            }
        });

        socket.current.on(socketActions.ClientReadMessage, (res) => {
            if(res.user !== currentUser.id) {
                dispatch(messageStatus(res))
            }
        });

        return () => {
            socket.current.disconnect();
        };
    }, []);

    const createRoom = (users, photo, name) => {
        socket.current.emit(socketActions.ServerCreateRoom, {
            users,
            photo,
            name,
        });
    };

    const joinRoom = (roomId) => {
        socket.current?.emit(socketActions.ServerJoinRoom, roomId);
    }

    const sendMessage = (roomId, message, file) => {
        socket.current?.emit(socketActions.ServerSendMessage, {
            room: roomId,
            message,
            file,
        });
    };

    const deleteMessageSocket = (id) => {
        socket.current?.emit(socketActions.ServerDeleteMessage, {
            id
        });
    };

    const updateMessageSocket = (id,text) => {
        socket.current?.emit(socketActions.ServerUpdateMessage, {
            id,
            text
        });
    };

    const deleteRoom = (room) => {
        socket.current?.emit(socketActions.ServerDeleteRoom, room);
    };

    const startWriting = (room) => {
        socket.current?.emit(socketActions.ServerStartWriting, {
            id: room,
        });
    };

    const stopWriting = (room) => {
        socket.current?.emit(socketActions.ServerStopWriting, {
            id: room,
        });
    };

    const readMessage = (roomId) => {
        socket.current?.emit(socketActions.ServerReadMessage, {
            id: roomId,
        });
    };

    const value = {
        createRoom,
        joinRoom,
        sendMessage,
        deleteMessageSocket,
        updateMessageSocket,
        deleteRoom,
        startWriting,
        stopWriting,
        readMessage
    };

    return (
        <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
    );
};

export default SocketProvider;