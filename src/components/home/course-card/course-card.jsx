import { BsFillCaretRightFill } from "react-icons/bs";
import Rating from "../../shared/rating/rating"

import './course-card.css'


const CourseCard = ({img,lessonsCount,title,rate,instructorImg,instructorName,specialization,category}) => {

    return (
        <div className='course-card-container'>
            <div className="course-img">
                <img src={img} alt='Course' />
            </div>
            <div className="course-info">
                <div className="course-info-top">
                    <div className="rating-lessons-container">
                        <span className="custom-icon video-icon">
                            <BsFillCaretRightFill />
                        </span>
                        <span className="lessons-count">{lessonsCount}</span>
                        <div className="rating-container">
                            <Rating rate={rate} />
                        </div>
                    </div>
                    <div className="course-title">
                        <h5>{title}</h5>
                    </div>
                </div>
                <hr />
                <div className="course-info-bottom">
                    <div className="instructor-info">
                        <img src={instructorImg} alt="Instructor" />
                        <div className="specialization-name">
                            <p className="inst-name">{instructorName}</p>
                            <p className="inst-spe">{specialization}</p>
                        </div>
                        <span className="category">{category}</span>
                    </div>
                    <button className="mybtn dark-btn">Enroll Now</button>
                </div>
            </div>

        </div>
    );
}

export default CourseCard;

