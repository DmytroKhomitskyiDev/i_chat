import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import {Navigate} from "react-router-dom"

const JoinSidebar = () => {

    if (!localStorage.getItem("token")) {
        return <Navigate to='/login'/>;
    }

    return (
        <div className={'main'}>
            <Sidebar/>
            <Outlet />
        </div>
    )
}

export default JoinSidebar