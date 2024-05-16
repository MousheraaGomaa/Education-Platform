import { FaCircle } from "react-icons/fa";
import './floatdiv-img.css';
const FloatdivImg = ({ img, text1, text2, btnLabel, joinMeeting }) => {
    return (
        <div className='floatdiv' >
            <div >
                <img src={img} alt="" />
                <FaCircle className="active-icon" />
            </div>
            <div className="text">
                <h5>{text1}</h5>
                <h6>{text2}</h6>
                <button className="bg-bronze" onClick={joinMeeting}>{btnLabel}</button>
            </div>
        </div>

    );
}

export default FloatdivImg;
