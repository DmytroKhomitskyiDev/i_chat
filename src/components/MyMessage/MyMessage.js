import React from "react";
import {ReactComponent as checkmark} from "../../images/message/checkmark.svg";
import {ReactComponent as dots} from "../../images/message/dots.svg";
import {SMyMessage} from "./style";
import MessagePopover from "../MessagePopover/MessagePopover";

const Checkmark = checkmark;
const Dots = dots;

const MyMessage = ({message,setEditMessage}) => {
    const date = (date) => {
       const dateToDay = new Date(date)
       return `${dateToDay.getHours()} : ${dateToDay.getMinutes()}`
    }
    return (
        <SMyMessage>
            <div className="messageBody--dots my-dots">
                <MessagePopover messageId={message.id} placement={'left'} text={message.text} setEditMessage={setEditMessage}>
                    <Dots/>
                </MessagePopover>
            </div>
            <div className="my--messageBlock">
                <p className="my--message">{message.text}</p>
                <span className="abs_date">{date(message.date)}</span>
            </div>
            <Checkmark/>
        </SMyMessage>
    )
}

export default MyMessage

