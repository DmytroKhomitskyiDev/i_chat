import React, {createContext, useContext, useEffect, useRef} from "react";
import {io} from "socket.io-client";
import socketActions from "./soketActions";
import {useSelector} from "react-redux";



const SocketContext = createContext({});

export const useSocket = () => {
    return useContext(SocketContext);
};

const SocketProvider= ({ children }) => {

    const socket = useRef(null);



    const currentUser = useSelector(state => state.auth.user)

    useEffect(() => {
        socket.current = io('http://localhost:3001', {
            auth: {
                token: localStorage.getItem('token'),
            },
        });

        socket.current.on(socketActions.ClientConnection, (res) => {
            console.log(res);
        });

        socket.current.on(socketActions.ClientCreateRoom, (room) => {
            socket.current?.emit(socketActions.ServerJoinRoom, room.id);
            console.log(room)
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

    const value = {
        createRoom,
        joinRoom,
        sendMessage,
        deleteMessageSocket,
        updateMessageSocket,
        deleteRoom,
        startWriting,
        stopWriting
    };

    return (
        <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
    );
};

export default SocketProvider;