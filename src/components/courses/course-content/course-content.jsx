import { useNavigate } from "react-router-dom";

import { HiBookOpen } from "react-icons/hi2";
import { PiVideoFill } from "react-icons/pi";

import ListGroup from "../list-group/list-group";

import './course-content.css'

const CourseContent = ({ listLessons, listQuizzes, activeLesson, setActiveLesson }) => {

    const navigate = useNavigate();
    
    const startQuiz = (quiz) => {
        navigate(`quiz/${quiz.id}`);
    }
    const isLessonActive = (lesson)=>{
        return lesson.id === activeLesson?.id;
    }
    return (
        <div className="course-content">
            <ListGroup
                title={'Change Simplification'}
                list={listLessons}
                icon={<PiVideoFill />}
                isActive = {isLessonActive}
                clickHandle={setActiveLesson}
            />
            <ListGroup
                title={'PRACTICE QUIZ'}
                list={listQuizzes}
                icon={<HiBookOpen />}
                clickHandle={startQuiz}
            />
             <ListGroup
                title={'PRACTICE QUIZZES'}
                list={listQuizzes}
                icon={''}
                clickHandle={startQuiz}
            />
        </div>
    );
}

export default CourseContent;