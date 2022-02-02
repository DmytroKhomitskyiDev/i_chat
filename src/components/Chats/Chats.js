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
import {addRoom, setActiveRoom, setMessages, setRooms} from "../../redux/actions";

const Chats = () => {

    const {createRoom, joinRoom} = useSocket();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch()
    const currentUser = useSelector( state => state.auth.user)
    const {rooms, activeRoom} = useSelector( state => state.chat)

    const online  = useSelector( state => state.chat.online)

    console.log(online)

    useEffect(() => {
        fetchRooms()

        // const interval = setInterval(() => {
        //     fetchRooms()
        // }, 10000)
        //
        // return () => {
        //     clearInterval(interval)
        // }
    }, [])

    const fetchRooms = () => {
        getChatRooms(0, 0).then((data) => {
            dispatch(setRooms(data.data))
        })
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const onFinish = async (values) => {
        try {
            await createRoom([currentUser?.email, values.email], '', values.chatName)

            handleCancel()
        } catch (e) {
            console.log(e)
        }

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleRoomClick = async (room) => {
        dispatch(setActiveRoom(room))

        await joinRoom(room.id)
        getChatMessages(room.id, 0, 0).then((data) => {
            dispatch(setMessages(data.data))
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
                                <SChatBlock key={room.id} onClick={() => handleRoomClick(room)} className={activeRoom && activeRoom.id === room.id ? 'activeBlock' : ''}>
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