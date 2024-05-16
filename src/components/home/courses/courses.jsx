// import axios from 'axios';
import { useState, useEffect , memo } from 'react';
import { useNavigate } from 'react-router-dom';
// import { GetCoursesRoute } from '../../../utils/apiRoutes';
import CourseCard from '../course-card/course-card';
import './courses.css'
const Courses = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    // useEffect(() => {
    //     axios
    //       .get(GetCoursesRoute)
    //       .then((response)=>{
    //         setCourses(response.data);
    //       })
    //       .catch((err)=>{

    //       })
    // },[]);
    useEffect(() => {
        let coursesData = [
            {
                img: 'images/courses/python.jpg',
                lessonsCount: '25x Lesson',
                title: 'supervised machine learning: Regression and classification',
                rate: 4,
                instructorImg: 'images/avatar-boy-img.jpg',
                instructorName: 'Wade Warren',
                specialization: 'Python Developer',
                category: 'Design'
            },
            {
                img: 'images/courses/Programming-Language.jpg',
                lessonsCount: '16x lesson',
                title: 'Programming for Everybody (Getting Started with Python)',
                rate: 3,
                instructorImg: 'images/avatar-boy-img.jpg',
                instructorName: 'Brooklyn Simmons',
                specialization: 'Programmer',
                category: 'Programming'
            },
            {
                img: 'images/courses/marketing.jpg',
                lessonsCount: '20x Lesson',
                title: 'Leading Teams: Developing as a Leader',
                rate: 2,
                instructorImg: 'images/avatar-girl-img.jpg',
                instructorName: 'Raya Hawkins',
                specialization: 'HR',
                category: 'Marketing'
            },
            {
                img: 'images/courses/digital-marketing.jpg',
                lessonsCount: '15x Lesson',
                title: 'Leading Teams: Developing as a Leader',
                rate: 5,
                instructorImg: 'images/avatar-girl-img.jpg',
                instructorName: 'Raya Hawkins',
                specialization: 'HR',
                category: 'Marketing'
            }

        ]
        setCourses(coursesData);
    }, [])
    const showCourses = () => {
        navigate('/courses');
    }
    return (
        <section className="courses-container">
            <div className="courses-header">
                <h3>Our <span className='success-color'>Courses</span></h3>
                <button className='mybtn dark-btn' onClick={showCourses}>See All</button>
            </div>
            <div className="courses me-lg-4">
                <div className='row row-cols-1  row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
                    {
                        courses.map((course, index) => {
                            return <div className='col mb-4 ' key={index}>
                                <CourseCard {...course}  />
                            </div>;
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default memo(Courses);