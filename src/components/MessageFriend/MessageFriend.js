import React from "react";
import {ReactComponent as dots} from "../../images/message/dots.svg";
import woman from "../../images/24.png";
import {SFriendMessage} from "./style";
import MessagePopover from "../MessagePopover/MessagePopover";
import {getDateAgo} from "../Helpers/helpers";

const Dots = dots;

const MessageFriend = ({message}) => {

    return (
        <SFriendMessage>
            <img className="messageBody--avatar" src={woman} alt="people"/>
            <div className="messageBody--send">
                <p className="messageBody--text">{message.text}</p>
                <span className="abs_date">{getDateAgo(message.date)}</span>
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