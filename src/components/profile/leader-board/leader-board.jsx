
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { BsCaretUpFill } from "react-icons/bs";

import styles from './leader-board.module.css'
const LeaderBoard = () => {
    return (
        <div className={styles?.["learder-board-container"]}>
            <h5>
                Leader Board
            </h5>
            <div className={`d-flex ${styles?.['header']}`}>
                <h6 className="col-1">RANK</h6>
                <h6 className="col-3">NAME</h6>
                <h6 className="col-1">COURSE</h6>
                <h6 className="col-1">HOUR</h6>
                <h6 className="col-1">POINT</h6>
            </div>
            <hr />
            <div className={`d-flex ${styles?.['leader']}`}>
                <div className={`col-1 ${styles?.["rank"]}`}>
                    <span className={`${styles?.["rank-value"]}`}>1</span>
                    <span className={styles?.["icon"]}>
                        <BsCaretUpFill />
                    </span>
                </div>
                <div className={`col-3 ${styles?.["inst-data"]}`}>
                    <span><img src="/images/avatar-girl-img.jpg" alt="Instructor" /></span>
                    <h6>Charlie Rawal</h6>
                </div>
                <p className={`col-1 ${styles?.['course']}`}>53</p>
                <p className={`col-1 ${styles?.['hour']}`}>250</p>
                <p className={`col-1 ${styles?.["point"]}`}>13.450</p>
            </div>
        </div>
    );
}


export default LeaderBoard;