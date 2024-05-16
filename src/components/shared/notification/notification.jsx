import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";

import styles from './notification.module.css';

const Notification = () => {
    return (
        <div className={styles?.["notification"]}>
            <span className={styles?.['icon']}><IoMdNotificationsOutline /></span>
            <span className={styles?.['noti-count']}>
                <FaCircle />
            </span>
        </div>
    );
}

export default Notification;