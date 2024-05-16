import { useState, useEffect } from 'react'

// import { GetPurchasedCourses } from '../../../utils/apiRoutes'

import PurchasedCourseCard from './../purchased-course-card/purchased-course-card';
import SliderControls from '../../shared/slider-controls/slider-controls';
import Slick from './../../shared/slick/slick';

import styles from './purchased-courses.module.css'

const PurchasedCourses = ({ userId, userName }) => {

    const [purchasedCourses, setPurchasedCourses] = useState([])
    const [slickItems, setSlickItems] = useState([]);
    const [sliderRef, setSliderRef] = useState(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    
    const updateSliderRef = (slider) => {
        setSliderRef(slider);
    }
    // useEffect(() => {
    //     let url = GetPurchasedCourses.replace(':id', userId);
    //     axios.get(url)
    //         .then((response) => {
    //             if (response) {
    //                 setPurchasedCourses(response.data)
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])

    //    set static data
    useEffect(() => {
        let courses = [
            {
                title: 'Awesome Feather icons pack ',
                image: 'images/courses/python1.jpg',
                progress: 5,
                totalLessons: 7,
                instructor: {
                    name: 'Mai',
                    image: 'images/avatar-girl-img.jpg'
                }
            },
            {
                title: 'Awesome Feather icons pack ',
                image: 'images/courses/digital-marketing.jpg',
                progress: 10,
                totalLessons: 20,
                instructor: {
                    name: 'Hany',
                    image: 'images/avatar-boy-img.jpg'
                }
            },
            {
                title: 'Awesome Feather icons pack ',
                image: 'images/courses/python1.jpg',
                progress: 5,
                totalLessons: 7,
                instructor: {
                    name: 'Mai',
                    image: 'images/avatar-girl-img.jpg'
                }
            },
            {
                title: 'Awesome Feather icons pack ',
                image: 'images/courses/marketing.jpg',
                progress: 15,
                totalLessons: 15,
                instructor: {
                    name: 'Mai',
                    image: 'images/avatar-girl-img.jpg'
                }
            },
            {
                title: 'Awesome Feather icons pack ',
                image: 'images/courses/python.jpg',
                progress: 2,
                totalLessons: 10,
                instructor: {
                    name: 'Ali',
                    image: 'images/avatar-boy-img.jpg'
                }
            }
        ]
        setPurchasedCourses(courses);
    }, [])
    useEffect(() => {
        let items = purchasedCourses.map((course, index) => {
            return <PurchasedCourseCard course={course} key={index} />
        });
        setSlickItems(items);
    }, [purchasedCourses])

    const settings = {
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        afterChange: current => setCurrentSlide(current),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={`${styles['purchased-courses-container']} `}>
            <div className="custom-container">
                <div className={`${styles['purchased-courses-header']}`}>
                    <h3>Welcome {userName}, ready for your next lesson?</h3>
                    <h6>View history</h6>
                </div>
                {slickItems.length ? <Slick
                    settings={settings}
                    slickItems={slickItems}
                    updateSliderRef={updateSliderRef}
                /> : ''
                }
                <div className={styles['slider-controls']}>
                    <SliderControls
                        sliderRef={sliderRef}
                        currentSlide={currentSlide}
                    />
                </div>
            </div>
        </div>
    );
}

export default PurchasedCourses;
