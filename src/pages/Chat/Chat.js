import React from "react";
import { SChatContainer} from "./style";
import Chats from "../../components/Chats/Chats";
import ChatMessage from "../../components/ChatMessage/ChatMessage";

const ChatContainer = () => {
    return(
        <SChatContainer>
           <Chats />
           <ChatMessage />
        </SChatContainer>
    )
}

export default ChatContainer