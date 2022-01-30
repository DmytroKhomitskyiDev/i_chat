import React from "react";
import {useSocket} from "../SocketContext/SoketContext";
import {Button, Popover} from "antd";
import {SPopoverContent} from "./style";

const MessagePopover = ({children, messageId, placement,text,setEditMessage}) => {

    const { deleteMessageSocket} = useSocket();

    const deleteMessage = (id) => {
        deleteMessageSocket(id)
    }

    const content = (
        <SPopoverContent>
            <Button onClick={() => deleteMessage(messageId)}>Delete</Button>
            <Button onClick={() => setEditMessage({messageId,text})}>Edit</Button>
        </SPopoverContent>
    );
    return (
        <Popover placement={placement}  content={content} trigger="click">
            {children}
        </Popover>
    )
}

export default MessagePopover