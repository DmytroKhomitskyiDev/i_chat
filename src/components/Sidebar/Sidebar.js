import React from "react";
import {SIcon, SSideBar} from "./style";
import {Link} from "react-router-dom";
import avatar from "../../images/avatar.png"
import { ReactComponent as home }  from "../../images/icons/sidebar/home.svg"
import { ReactComponent as chat }  from "../../images/icons/sidebar/IconChat.svg"
import { ReactComponent as person }  from "../../images/icons/sidebar/person.svg"
import { ReactComponent as bell }  from "../../images/icons/sidebar/bell.svg"
import { ReactComponent as calendar }  from "../../images/icons/sidebar/calendar.svg"
import { ReactComponent as settings }  from "../../images/icons/sidebar/settingsGray.svg"
import { ReactComponent as shape }   from "../../images/icons/Shape.svg"
import { ReactComponent as power }  from "../../images/icons/sidebar/power.svg"

const Home = SIcon(home);
const Chat = SIcon(chat);
const Person = SIcon(person);
const Bell = SIcon(bell);
const Calendar = SIcon(calendar);
const Settings = SIcon(settings);
const Shape = SIcon(shape);
const Power = SIcon(power);



const Sidebar = () => {
    return (
        <SSideBar>
            <div className="sidebarTop">
                <div className="avatarBlock">
                    <img className="avatarImg" src={avatar} alt="avatar"/>
                    <div className="avatarArrow">
                        <p className="avatarSub">Henry Jabbawockiez</p>
                        <Shape/>
                    </div>
                </div>
                <nav>
                    <ul className="navList">
                        <li className="navItem">
                            <Link to="/">
                                <Home />
                                Home
                            </Link>
                        </li>
                        <li className="navItem">
                            <Link to="/chat">
                                <Chat/>
                                Chat
                            </Link>
                        </li>
                        <li className="navItem">
                            <Link to="/contact">
                                <Person />
                                Contact
                            </Link>
                        </li>
                        <li className="navItem">
                            <Link to="/notifications">
                                <Bell/>
                                Notifications
                            </Link>
                        </li>
                        <li className="navItem">
                            <Link to="/calendar">
                                <Calendar/>
                                Calendar
                            </Link>
                        </li>
                        <li className="navItem">
                            <Link to="/settings">
                                <Settings/>
                                Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="sidebarBottom">
                <ul className="navList">
                    <li>
                        <Link  to="/login">
                            <Power className="navImg"/>
                            Log out
                        </Link>
                    </li>
                </ul>

            </div>
        </SSideBar>
    )
}

export default Sidebar