import React from "react";
import {ReactComponent as dots} from "../../images/message/dots.svg";
import woman from "../../images/24.png";
import {SFriendMessage} from "./style";
import MessagePopover from "../MessagePopover/MessagePopover";

const Dots = dots;

const MessageFriend = ({message}) => {
    const date = (date) => {
        const dateToDay = new Date(date)
        return `${dateToDay.getHours()} : ${dateToDay.getMinutes()}`
    }

    return (
        <SFriendMessage>
            <img className="messageBody--avatar" src={woman} alt="people"/>
            <div className="messageBody--send">
                <p className="messageBody--text">{message.text}</p>
                <span className="abs_date">{date(message.date)}</span>
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