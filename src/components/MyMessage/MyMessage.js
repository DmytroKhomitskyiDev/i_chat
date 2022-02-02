import React from "react";
import {ReactComponent as checkmark} from "../../images/message/checkmark.svg";
import {ReactComponent as readMessage} from "../../images/message/all-done.svg";
import {ReactComponent as dots} from "../../images/message/dots.svg";
import {SMyMessage} from "./style";
import MessagePopover from "../MessagePopover/MessagePopover";
import {getDateAgo} from "../Helpers/helpers";
import {useSelector} from "react-redux";

const Checkmark = checkmark;
const Dots = dots;
const ReadMessage = readMessage;

const MyMessage = ({message,setEditMessage}) => {


    const getMessageStatus = useSelector( state => state.chat.messageStatus)


    return (
        <SMyMessage>
            <div className="messageBody--dots my-dots">
                <MessagePopover messageId={message.id} placement={'left'} text={message.text} setEditMessage={setEditMessage}>
                    <Dots/>
                </MessagePopover>
            </div>
            <div className="my--messageBlock">
                <p className="my--message">{message.text}</p>
                <span className="abs_date">{getDateAgo(message.date)}</span>
            </div>
            { getMessageStatus && getMessageStatus.room ? (<ReadMessage/>) : <Checkmark/> }
        </SMyMessage>
    )
}

export default MyMessage

