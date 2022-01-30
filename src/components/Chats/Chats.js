import React, {useEffect, useState} from "react";
import {SButton} from "../../pages/Chat/style";
import {SChatAdd,SChatBlock} from "./style";
import arrowGray from "../../images/icons/ShapeGray.png";
import plus from "../../images/icons/plus.png";
import ChatSearch from "../ChatSearch/ChatSearch";
import ChatRoom from "../ChatRoom/ChatRoom";
import {useSocket} from "../SocketContext/SoketContext";
import {getChatMessages, getChatRooms} from "../../api/api";
import ChatModal from "../ChatModal/ChatModal";
import {useDispatch, useSelector} from "react-redux";
import {chatActionTypes} from "../../redux/types";

const Chats = () => {

    const {createRoom, joinRoom} = useSocket();
    const [rooms, setRooms] = useState([]);
    const [activeRoom, setActiveRoom] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch()
    const currentUser = useSelector( state => state.auth.user)

    useEffect(() => {
        getChatRooms(0, 0).then((data) => {
            setRooms(data.data)
        })
    }, [])


    const showModal = () => {
        setIsModalVisible(true);
    };

    const onFinish = async (values) => {
        try {
            const data = await createRoom([currentUser?.email, values.email], '', values.chatName)
            setActiveRoom(data?.id)
            console.log('Success:', values);
            handleCancel()
        } catch (e) {
            console.log(e)
        }

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const handleGetMessages = async (id) => {
        dispatch({
            type: chatActionTypes.SET_ACTIVE_ROOM,
            payload: id
        })

        setActiveRoom(id)

        await joinRoom(id)
        getChatMessages(id, 0, 0).then((data) => {
            dispatch({
                type: chatActionTypes.SET_MESSAGES,
                payload: data.data
            })
        })
    }
    return (
        <>
            <ChatModal onFinish={onFinish} showModal={showModal}  handleCancel={handleCancel} isModalVisible={isModalVisible}/>
            <SChatAdd>
                <div className="chatAdd-BlockTitle">
                    <div className="BlockTitle_left">
                        <h3 className="chatTitle">Chats</h3>
                        <p className="chatSubTitle">Recent Chats <span><img src={arrowGray} alt="arrowGray"/></span></p>
                    </div>
                    <div className="BlockTitle_right">
                        <SButton onClick={showModal}>
                            <img src={plus} alt="plus"/>
                            Create new Chat
                        </SButton>
                    </div>
                </div>
                <ChatSearch/>
                <div className="chatRooms">
                    {
                        rooms.map((room) => {
                            return (
                                <SChatBlock key={room.id} onClick={() => handleGetMessages(room.id)} className={activeRoom === room.id ? 'activeBlock' : ''}>
                                    <ChatRoom room={room} />
                                </SChatBlock>
                            )
                        })
                    }
                </div>
            </SChatAdd>
        </>

    )
}

export default Chats