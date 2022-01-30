import React from "react";
import {Button, Form, Input} from "antd";
import {ReactComponent as iconAdd} from "../../images/message/Iconadd.svg";
import {ReactComponent as smileIcon} from "../../images/message/Smileicon.svg";
import {ReactComponent as sendIcon} from "../../images/message/sendIcon.svg";
import {SChatFooter} from "./style";
import {useSocket} from "../SocketContext/SoketContext";
import {useSelector} from "react-redux";


const IconAdd = iconAdd;
const SmileIcon = smileIcon;
const SendIcon = sendIcon;


const ChatMessageFooter = ({onFinishMessage,onFinishFailed,form}) => {
    const {startWriting,stopWriting} = useSocket();
    const roomId = useSelector( state => state.chat.activeRoom.id)

    return (
        <SChatFooter>
            <div className="messageBody--bottom">
                <div className="messageBody--add">
                    <IconAdd/>
                </div>
                <Form
                    name="basic"
                    form={form}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinishMessage}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="message"
                        className="messageBody--input"
                    >
                        <Input placeholder='Type a message here'
                               onFocus={() => startWriting(roomId)}
                               onBlur={() => stopWriting(roomId)}
                        />
                    </Form.Item>
                    <Form.Item className="messageBody--sendMessage">
                        <SmileIcon className="messageSmile"/>
                        <Button className="send-block" htmlType="submit">
                            <SendIcon/>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </SChatFooter>
    )
}

export default ChatMessageFooter