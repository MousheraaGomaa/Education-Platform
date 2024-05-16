import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { PiSquaresFourThin } from "react-icons/pi";
import { GoArrowLeft } from "react-icons/go";
import { TfiMenu } from "react-icons/tfi";

import Card from '../../components/shared/card/card';

import Sidebar from '../../components/shared/sidebar1/sidebar';
import CourseHeader from '../../components/courses/course-header/course-header';
import CourseContent from "../../components/courses/course-content/course-content";
import CourseInfo from '../../components/courses/course-info/course-info';
import Slick from '../../components/shared/slick/slick';
import SliderControls from '../../components/shared/slider-controls/slider-controls'
import './course-details.css'

const CourseDetails = () => {

    const navigate = useNavigate()
    const [activeLesson, setActiveLesson] = useState(null)
    const [showSidebar, setShowSidebar] = useState(false);
    const [sliderRef, setSliderRef] = useState(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    const updateSliderRef = (slider) => {
        setSliderRef(slider);
    }
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        afterChange: current => setCurrentSlide(current),
        responsive: [
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const handleClose = () => setShowSidebar(false);
    const handleShow = () => setShowSidebar(true);

    const setActive = (lesson) => {
        setActiveLesson(lesson);
    }
    const ListLessons = [
        {
            id: 1,
            title: 'Lesson 01:Introduction about XD',
            duration: '30 mins'
        },
        {
            id: 2,
            title: 'Lesson 01:Introduction about XD',
            duration: '30 mins'
        }, {
            id: 3,
            title: 'Lesson 01:Introduction about XD',
            duration: '30 mins'
        }, {
            id: 4,
            title: 'Lesson 01:Introduction about XD',
            duration: '30 mins'
        }
    ]
    const ListQuizzes = [
        {
            id: 1,
            title: 'Lesson 01:Introduction about XD',
            duration: '30 mins'
        },
        {
            id: 2,
            title: 'Lesson 01:Introduction about XD',
            duration: '30 mins'
        }, {
            id: 3,
            title: 'Lesson 01:Introduction about XD',
            duration: '30 mins'
        }, {
            id: 4,
            title: 'Lesson 01:Introduction about XD',
            duration: '30 mins'
        }
    ]
    const courses = [
        {
            courseImg: 'images/courses/python1.jpg',
            icon: <PiSquaresFourThin />,
            category: 'Design',
            duration: '3 Month',
            title: 'AWS Certified Solution Architect',
            description: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nulla ea illo minima inventore consequuntur praesentium ipsam tenetur doloremque, 
                nam veniam voluptates iure recusandae repellendus fuga magnam optio vero nemo distinctio!
            `,
            instImg: 'images/avatar-girl-img.jpg',
            instName: 'Lina',
            price: 80,
            offer: 0.50
        },
        {
            courseImg: 'images/courses/marketing.jpg',
            icon: <PiSquaresFourThin />,
            category: 'Marketing',
            duration: '2 Month',
            title: 'AWS Certified Solution Architect',
            description: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            `,
            instImg: 'images/avatar-boy-img.jpg',
            instName: 'Ali',
            price: 100,
            offer: 0.20
        },
        {
            courseImg: 'images/courses/digital-marketing.jpg',
            icon: <PiSquaresFourThin />,
            category: 'Marketing',
            duration: '2 Month',
            title: 'AWS Certified Solution Architect',
            description: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            `,
            instImg: 'images/avatar-girl-img.jpg',
            instName: 'Mai',
            price: 100,
            offer: 0.20
        },
        {
            courseImg: 'images/courses/marketing.jpg',
            icon: <PiSquaresFourThin />,
            category: 'Marketing',
            duration: '2 Month',
            title: 'AWS Certified Solution Architect',
            description: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            `,
            instImg: 'images/avatar-boy-img.jpg',
            instName: 'Ali',
            price: 100,
            offer: 0.20
        },
        {
            courseImg: 'images/courses/python.jpg',
            icon: <PiSquaresFourThin />,
            category: 'Programming',
            duration: '4 Month',
            title: 'AWS Certified Solution Architect',
            description: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            `,
            instImg: 'images/avatar-boy-img.jpg',
            instName: 'Ali',
            price: 100,
            offer: 0.20
        }
    ]
    const slickItems = courses.map((course) => {
        return (
            <Card {...course} />
        )
    });

    return (
        <div className='course-details-container header-space'>
            <div className="course-content-container col-3">
                <div className="actions">
                    <button className="backbtn" onClick={() => navigate(-1)}><GoArrowLeft /></button>
                    <div className="menu-section">
                        <span className='icon' onClick={handleShow} ><TfiMenu /></span>
                        <span className='icon-label'> Menu</span>
                    </div>
                </div>
                <div className='content'>
                    <CourseContent
                        listLessons={ListLessons}
                        listQuizzes={ListQuizzes}
                        activeLesson={activeLesson}
                        setActiveLesson={setActive}
                    />
                </div>

            </div>
            <div className="course-details  col-8 flex-1">
                <CourseHeader
                    courseTitle='Learn about Adobe XD & Prototyping'
                    lessonTitle='Introduction about XD'
                    duration='1 hour'
                />
                <div className='custom-container'>
                    <video src='/videos/video1.mp4' controls="controls" autoPlay={false} />
                    <CourseInfo />
                    <div className="related-courses-container">
                        <div className="related-courses-header">
                            <h5>Student also bought</h5>
                            <SliderControls
                                sliderRef={sliderRef}
                                currentSlide={currentSlide}
                            />
                        </div>
                        <div className="related-courses">
                            <Slick slickItems={slickItems} updateSliderRef={updateSliderRef} settings={settings} />
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar
                content={
                    <CourseContent
                        listLessons={ListLessons}
                        listQuizzes={ListQuizzes}
                        activeLesson={activeLesson}
                        setActiveLesson={setActive}
                    />
                }
                open={showSidebar}
                handleClose={handleClose}
            />
        </div>
    );
}

export default CourseDetails;


