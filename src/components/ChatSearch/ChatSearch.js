import React from "react";
import {SChatSearch} from "./style";

const ChatSearch = () => {
    return (
        <SChatSearch>
            <input className='inputSearch' type="text" placeholder='Search'/>
            <select className='checkSearch' name="" id="">
                <option value="value1">Messages</option>
                <option value="value2">Messages 1</option>
                <option value="value3">Messages 2</option>
            </select>
        </SChatSearch>
    )
}

export default ChatSearch