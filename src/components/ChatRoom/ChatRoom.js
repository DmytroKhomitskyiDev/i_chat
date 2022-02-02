import React from "react";
import woman from "../../images/24.png"
import online from "../../images/Ellipse.png"
import {getDateAgo} from "../Helpers/helpers";


const ChatRoom = ({ room }) => {

    return(
            <>
                <div className="chatRoom-title">
                    <div className="chatRoom-left">
                        <div className="chatRoom-leftImg">
                            <img className="chatRoom-img" src={woman} alt="woman"/>
                            {room.online && (
                                <img className="chatRoom-absImg" src={online} alt="online"/>
                            )}
                        </div>
                        <div className="chatRoom-leftInfo">
                            <p className="chatRoom-name">{room.name}</p>
                            <p className="chatRoom-action">writes</p>
                        </div>
                    </div>
                    <div className="chatRoom-right">
                        <p className="chatRoom-data">{ getDateAgo(room.time)}</p>
                    </div>
                </div>
                <div className="chatRoom-text">
                    <p>Most of its text is made up from sections 1.10.32–3 of Cicero's
                        De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). </p>
                </div>
            </>
    )
}
export default ChatRoom