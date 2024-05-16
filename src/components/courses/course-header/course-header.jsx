import { LuClock4 } from "react-icons/lu";

import './course-header.css'
const CourseHeader = ({courseTitle, lessonTitle,duration}) => {
    return (
        <div className="course-header">
            <div className="custom-container">
                <h2>{courseTitle}</h2>
                <div className='subtitle'>
                    <div className='lesson-title'>
                        <h6>{lessonTitle}</h6>
                        <h6 className='reader'>Try Course Reader now</h6>
                    </div>
                    <div className="duration">
                        <LuClock4 />
                        <span>  {duration}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseHeader;
