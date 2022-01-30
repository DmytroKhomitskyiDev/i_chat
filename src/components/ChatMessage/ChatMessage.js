import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSocket} from "../SocketContext/SoketContext";
import {getChatMessages} from "../../api/api";
import MessageFriend from "../MessageFriend/MessageFriend";
import MyMessage from "../MyMessage/MyMessage";
import woman from "../../images/24.png";
import {ReactComponent as paperclip} from "../../images/message/paperclip.svg";
import {ReactComponent as dotsVertical} from "../../images/message/dotsVertical.svg";
import {chatActionTypes} from "../../redux/types";
import {SChatMessageHeader, SMessageBody, SMessageContainer} from "./style";
import ChatMessageFooter from "../ChatMessageFooter/ChatMessageFooter";
import {Form, Popover} from "antd";
import PopoverRoom from "../PopoverRoom/PopoverRoom";

const Paperclip = paperclip;
const DotsVertical = dotsVertical;


const ChatMessage = () => {
    const {sendMessage, joinRoom,updateMessageSocket} = useSocket();
    const chat = useSelector(state => state.chat)
    const [editMessage,setEditMessage] = useState(null)
    const dispatch = useDispatch()
    const [form] = Form.useForm();

    console.log(editMessage)
    const onFinishMessage = async (values) => {

        if(editMessage){
            await updateMessageSocket(editMessage.messageId,values.message)
            form.resetFields();
            setEditMessage(null)
            return
        }

        await sendMessage(chat.activeRoom, values.message, null)
        getChatMessages(chat.activeRoom, 0, 0).then((data) => {
            dispatch({
                type: chatActionTypes.SET_MESSAGES,
                payload: data.data
            })
        })
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleEditMessage = (data) => {
        form.setFieldsValue({
            message: data.text
        })
        setEditMessage(data)
    }


    return (
        <SMessageContainer>
            <SChatMessageHeader>
                <div className="message-header--left">
                    <img src={woman} alt="woman"/>
                    <div className="message-header--name">
                        <p className="message-header--title">Nika Jerrardo</p>
                        <p className="message-header--time">last online 5 hours ago</p>
                    </div>
                </div>
                <div className="message-header--right">
                    <div className="message-header--icon">
                        <Paperclip/>
                    </div>
                    <PopoverRoom chatId={chat.activeRoom}>
                        <div className="message-header--icon">
                            <DotsVertical/>
                        </div>
                    </PopoverRoom>
                </div>
            </SChatMessageHeader>
            <SMessageBody>
                <div className="messageBody--top">
                    {
                        chat.messages.map(message => {
                            return message.type === 'user' ? (
                                <div key={message.id}>
                                    <MyMessage message={message}  setEditMessage={handleEditMessage}/>
                                </div>

                            ) : (
                                <div key={message.id}>
                                    <MessageFriend message={message}/>
                                </div>
                            )
                        })
                    }
                </div>
               <ChatMessageFooter form={form} onFinishMessage={onFinishMessage} onFinishFailed={onFinishFailed}/>
            </SMessageBody>
        </SMessageContainer>
    )
}

export default ChatMessage