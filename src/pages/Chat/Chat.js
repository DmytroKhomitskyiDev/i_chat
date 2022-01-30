import React from "react";
import { SChatContainer} from "./style";
import Chats from "../../components/Chats/Chats";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import {useSelector} from "react-redux";

const ChatContainer = () => {
    const activeRoom = useSelector(state => state.chat.activeRoom)

    return(
        <SChatContainer>
           <Chats />
            {activeRoom && <ChatMessage />}
        </SChatContainer>
    )
}

export default ChatContainer