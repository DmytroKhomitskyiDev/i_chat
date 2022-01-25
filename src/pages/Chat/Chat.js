import React, {useEffect, useState} from "react";
import {findUser} from "../../api/api";
import {useDispatch} from "react-redux";
import {types} from "../../redux/types";
import {SChatContainer} from "./style";
import {Button} from "antd";

const Chat = () => {
    // const {rooms} = useChatRooms(1, 1)



    return(
        <SChatContainer>
            <div className="chatAdd">
                <div className="chatAdd-BlockTitle">
                    <div className="BlockTitle_left">
                        <h3 className="chatTitle">Chats</h3>
                        <p className="chatSubTitle">Recent Chats</p>
                    </div>
                    <div className="BlockTitle_right">
                        <Button className="BlockTitle_button">
                            <img src="" alt=""/>
                            Create new Chat
                        </Button>
                    </div>
                </div>
            </div>
            <div className="chatMessage"></div>
        </SChatContainer>
    )
}

export default Chat