import React from "react";
import {Button, Popover} from "antd";
import {useSocket} from "../SocketContext/SoketContext";
import {useDispatch} from "react-redux";
import {chatActionTypes} from "../../redux/types";
import {removeRoom} from "../../redux/actions";

const PopoverRoom = ({children,chatId}) => {
    const { deleteRoom} = useSocket();
    const dispatch = useDispatch()
    const text = <span>Room</span>;

    const handleRemoveRoom = async (chatId) => {
        await deleteRoom(chatId)
    }
    const content = (
        <div>
            <Button onClick={() => handleRemoveRoom(chatId)}>Delete Room</Button>
        </div>
    );
    return(
        <Popover placement="bottom" title={text} content={content} trigger="click">
            {children}
        </Popover>
    )
}

export default PopoverRoom