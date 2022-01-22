import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const JoinSidebar = () => {
    return (
        <div className={'main'}>
            <Sidebar/>
            <Outlet />
        </div>
    )
}

export default JoinSidebar