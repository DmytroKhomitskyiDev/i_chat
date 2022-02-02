import React, {useEffect, useRef, useState} from "react";
import {Button, Form, Input} from "antd";
import {ReactComponent as iconAdd} from "../../images/message/Iconadd.svg";
import {ReactComponent as smileIcon} from "../../images/message/Smileicon.svg";
import {ReactComponent as sendIcon} from "../../images/message/sendIcon.svg";
import file from "../../images/message/file.png";
import image from "../../images/message/image.png";
import video from "../../images/message/film.png";
import {SChatFooter} from "./style";
import {useSocket} from "../SocketContext/SoketContext";
import {useSelector} from "react-redux";


const IconAdd = iconAdd;
const SmileIcon = smileIcon;
const SendIcon = sendIcon;


const ChatMessageFooter = ({onFinishMessage,onFinishFailed,form}) => {
    const {startWriting,stopWriting, readMessage} = useSocket();
    const roomId = useSelector( state => state.chat.activeRoom.id)
    const clickEl = useRef(null);
    const[activeIcons, setActiveIcons] = useState(false)

    useEffect(() => {
        const onClick = (e) => clickEl.current.contains(e.target) ||  setActiveIcons(false)
        document.addEventListener('click', onClick)
        return () => document.removeEventListener('click', onClick)
    },[])


    const animationIcon = (arg) => {
        setActiveIcons(!arg)
    }

    return (
        <SChatFooter>
            <div className="messageBody--bottom">
                <div className={ `messageBody--add ${activeIcons ? 'active' : ""}`} >
                    <IconAdd  ref={clickEl}  onClick={() => animationIcon(activeIcons)}/>
                    <div className="messageBody--add--abs">
                        <div className="messageBody--icon footerIcon">
                            <img className="footerIcon--file" src={video} alt="video"/>
                        </div>
                        <div className="messageBody--icon footerIcon">
                            <img className="footerIcon--file" src={image} alt="image"/>
                        </div>
                        <div className="messageBody--icon footerIcon">
                            <img className="footerIcon--file" src={file} alt="file"/>
                        </div>
                    </div>
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
                               type="text"
                               onFocus={() => startWriting(roomId)}
                               onBlur={() => stopWriting(roomId)}
                               onClick={() => readMessage(roomId)}
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