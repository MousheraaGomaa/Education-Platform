import { FcNegativeDynamic } from "react-icons/fc";
import { IoBookOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { PiClipboardTextLight } from "react-icons/pi";

import styles from './course-card.module.css'

const CourseCard = () => {
    return (
        <div className={styles?.['course-card']}>
            <span className={styles.icon} >
                <FcNegativeDynamic />
            </span>
            <h5>Basic:Html and Css</h5>
            <div className={styles?.["course-details"]}>
                <span>
                    <IoBookOutline className={styles?.['icon']} /> 24
                </span>
                <div></div>
                <span>
                    <PiClipboardTextLight className={styles?.['icon']} /> 24
                </span>
                <div></div>
                <span>
                    <IoPeopleOutline className={styles?.['icon']} /> 24
                </span>
            </div>
        </div>
    );
}

export default CourseCard;