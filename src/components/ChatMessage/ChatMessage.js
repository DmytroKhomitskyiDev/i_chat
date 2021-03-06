import React, {useState} from "react";
import { useSelector} from "react-redux";
import {useSocket} from "../SocketContext/SoketContext";
import MessageFriend from "../MessageFriend/MessageFriend";
import MyMessage from "../MyMessage/MyMessage";
import woman from "../../images/24.png";
import {ReactComponent as paperclip} from "../../images/message/paperclip.svg";
import {ReactComponent as dotsVertical} from "../../images/message/dotsVertical.svg";
import {SChatMessageHeader, SMessageBody, SMessageContainer} from "./style";
import ChatMessageFooter from "../ChatMessageFooter/ChatMessageFooter";
import {Form, Popover} from "antd";
import PopoverRoom from "../PopoverRoom/PopoverRoom";
import {getDateAgo} from "../Helpers/helpers";

const Paperclip = paperclip;
const DotsVertical = dotsVertical;


const ChatMessage = () => {
    const {sendMessage,updateMessageSocket} = useSocket();
    const { activeRoom, typingIn, messages } = useSelector(state => state.chat)
    const [editMessage,setEditMessage] = useState(null)
    const [form] = Form.useForm();


    const onFinishMessage = async (values) => {

        if(editMessage){
            await updateMessageSocket(editMessage.messageId,values.message)
            form.resetFields();
            setEditMessage(null)
            return
        }

        await sendMessage(activeRoom.id, values.message, null)

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
                        <p className="message-header--title">Nika Jerrardo {activeRoom.name} </p>
                        <p className="message-header--time">{activeRoom.online ? 'online' : `${getDateAgo(new Date())}`}</p>
                        <p className="message-header--time"><i>{typingIn && activeRoom.id === typingIn.room && '...typing'}</i></p>
                    </div>
                </div>
                <div className="message-header--right">
                    <div className="message-header--icon">
                        <Paperclip/>
                    </div>
                    <PopoverRoom chatId={activeRoom.id}>
                        <div className="message-header--icon">
                            <DotsVertical/>
                        </div>
                    </PopoverRoom>
                </div>
            </SChatMessageHeader>
            <SMessageBody>
                <div className="messageBody--top">
                    {
                        messages.map(message => {
                            return message.type === 'user' ? (
                                <div key={message.id}>
                                    <MyMessage message={message} setEditMessage={handleEditMessage}/>
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