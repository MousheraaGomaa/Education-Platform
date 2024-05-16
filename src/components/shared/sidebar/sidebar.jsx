import { NavLink } from 'react-router-dom';
import { FaUserTie } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { GiSecretBook } from "react-icons/gi";
import { PiUsersThreeFill } from "react-icons/pi";

import Search from '../search/search';
import './sidebar.css'

const Sidebar = ({ open, onclickOverlay }) => {

    return (

        <aside className={`sidebar d-lg-none ${open ? 'sidebar-active' : ''}`}>
            <div className="sidebar-overlay" onClick={onclickOverlay} />
            <div className={`sidebar-content ${open ? 'sidebar-content-active' : ''}`}>
                <div className="sidebar-elements">

                    <ul>
                        <li>
                            <Search classname={'dark'}/>
                        </li>
                        <li>
                            <IoIosHome />
                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <GiSecretBook />
                            <NavLink to="/courses">Courses</NavLink>
                        </li>
                        <li>
                            <FaUserTie />
                            <NavLink to="/careers">Careers</NavLink>
                        </li>
                        <li>
                            <ImProfile />
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                        <li>
                            <PiUsersThreeFill />
                            <NavLink to="/aboutUs">About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}


export default Sidebar;