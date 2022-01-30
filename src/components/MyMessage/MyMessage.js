import React from "react";
import {ReactComponent as checkmark} from "../../images/message/checkmark.svg";
import {ReactComponent as dots} from "../../images/message/dots.svg";
import {SMyMessage} from "./style";
import {Button, Popover} from "antd";
import {useSocket} from "../SocketContext/SoketContext";
import MessagePopover from "../MessagePopover/MessagePopover";

const Checkmark = checkmark;
const Dots = dots;

const MyMessage = ({message,setEditMessage}) => {

    return (
        <SMyMessage>
            <div className="messageBody--dots my-dots">
                <MessagePopover messageId={message.id} placement={'left'} text={message.text} setEditMessage={setEditMessage}>
                    <Dots/>
                </MessagePopover>
            </div>
            <div className="my--messageBlock">
                <p className="my--message">{message.text}</p>
            </div>
            <Checkmark/>
        </SMyMessage>
    )
}

export default MyMessage

