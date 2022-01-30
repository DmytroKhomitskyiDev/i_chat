import React from "react";
import {ReactComponent as dots} from "../../images/message/dots.svg";
import woman from "../../images/24.png";
import {SFriendMessage} from "./style";
import {Button, Popover} from "antd";
import {useSocket} from "../SocketContext/SoketContext";
import MessagePopover from "../MessagePopover/MessagePopover";

const Dots = dots;

const MessageFriend = ({message}) => {


    return (
        <SFriendMessage>
            <img className="messageBody--avatar" src={woman} alt="people"/>
            <div className="messageBody--send">
                <p className="messageBody--text">{message.text}</p>
            </div>
            <div className="messageBody--dots">
                <MessagePopover messageId={message.id} placement={'right'}>
                    <Dots/>
                </MessagePopover>
            </div>
        </SFriendMessage>
    )
}

export default MessageFriend