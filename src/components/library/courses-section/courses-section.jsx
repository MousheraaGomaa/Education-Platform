// import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import { PiSquaresFourThin } from "react-icons/pi";
import Card from '../../shared/card/card';
import styles from './courses-section.module.css'

const CoursesSection = (props) => {
    const { bgColor,paddingBlock, seeAllLink } = props;

    // const [courses, setCourses] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get(apiRoute)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setCourses(data.slice(0, 3))
    //         })
    //         .catch((error)=>{
    //             toast.error(error)
    //         })
    // })
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

    ]
    return (
        <div style={{ backgroundColor: bgColor ,paddingBlock:paddingBlock}}>
            <div className={`custom-container ${styles?.['courses-section']} `}>
                <div className={styles?.['header']}>
                    <h5>{props.children}</h5>
                    <Link to={seeAllLink} className={styles?.['seeAllLink']}>See all</Link>
                </div>
                <div className="courses-container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        courses.map((course, index) => {
                            return (
                                <div className="col" key={index}>
                                    <Card {...course} className='shadow' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default CoursesSection;