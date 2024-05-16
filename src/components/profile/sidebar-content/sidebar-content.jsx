import { NavLink } from 'react-router-dom'
import { BiCategoryAlt } from "react-icons/bi";
import { PiClipboardTextLight } from "react-icons/pi";
import { LuPieChart } from "react-icons/lu";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { RiInbox2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

import styles from './sidebar-content.module.css'

const SidebarContent = () => {
    return (<aside className={styles?.['siderbar-content-container']}>
        <div className={styles?.['sidebar-elements']}>
            <ul>
                <li>
                    <NavLink to="/">
                        <img src="images/profile/logo.png" alt="" />
                    </NavLink>
                </li>
                <li>
                    <div className={styles?.["element-content"]}>
                        <BiCategoryAlt />
                        <NavLink to="/profile/overview" className={({ isActive }) => isActive ? "active" : ""}>Overview</NavLink>
                    </div>
                </li>
                <li>
                    <div className={styles?.["element-content"]}>
                        <PiClipboardTextLight />
                        <NavLink to="/profile/assignments">Assignment</NavLink>
                    </div>
                </li>
                <li>
                    <div className={styles?.["element-content"]}>
                        <LuPieChart />
                        <NavLink to="/profile/reports">Reports </NavLink>
                        <span className={styles?.['unseen-messages']}>{12}</span>
                    </div>
                </li>
                <li>
                    <div className={styles?.["element-content"]}>
                        <BsFileEarmarkPlus />
                        <NavLink to="/profile/storage">File Storage</NavLink>
                    </div>
                </li>
                <li>
                    <div className={styles?.["element-content"]}>
                        <RiInbox2Line />
                        <NavLink to="/profile/inbox">Inbox</NavLink>
                        <span className={styles?.['unseen-messages']}>{12}</span>
                    </div>
                </li>
                <li>
                    <div className={styles?.["element-content"]}>
                        <IoSettingsOutline />
                        <NavLink to="/profile/settings">Settings</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
    );
}

export default SidebarContent;
