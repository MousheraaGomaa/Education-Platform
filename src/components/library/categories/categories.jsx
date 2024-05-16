// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { MdBusinessCenter } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdOutlineTheaters } from "react-icons/md";

// import { GetCategories } from '../../../utils/apiRoutes';
import CategoryCard from "../category-card/category-card";

import styles from './categories.module.css'



const Categories = () => {
    // use api
    // const [categories, setCategories] = useState([]);
    // useEffect(() => {                                           
    //     axios
    //         .get(GetCategories)
    //         .then((res)=>{
    //             setCategories(res.data)
    //         })
    //         .catch((error)=>{
    //             console.log(error);
    //         });
    // })
    let categoriesInfo = [
        {
            icon: <FaPaintBrush />,
            name: 'Design',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            iconFgColor: 'var(--fountain-blue)',
            iconBgColor: 'var(--jagged-ice)'
        },
        {
            icon: <CgScreen />,
            name: 'Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam nesciunt facilis quam magnam sed blanditiis atque ipsam fugit minus',
            iconFgColor: 'var(--cornflower-blue)',
            iconBgColor: 'var(--tropical-blue)'
        },
        {
            icon: <FaDatabase />,
            name: 'Development',
            description: 'Lorem ipsum dolor sit amet consectetur ',
            iconFgColor: 'var(--Anakiwa)',
            iconBgColor: 'var(--solitude)'
        },
        {
            icon: <MdBusinessCenter />,
            name: 'Business',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam nesciunt facilis quam magnam sed blanditiis atque ipsam fugit minus',
            iconFgColor: 'var(--robin-blue)',
            iconBgColor: 'var(--mint-tulip)'
        },
        {
            icon: <CgScreen />,
            name: 'Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam nesciunt facilis quam magnam sed blanditiis atque ipsam fugit minus eos repudiandae in laudantium autem sapiente, maxime nam. Quia, ratione!',
            iconFgColor: 'var(--cornflower-blue)',
            iconBgColor: 'var(--tropical-blue)'
        },
        {
            icon: <FaBook />,
            name: 'Photography',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam nesciunt facilis quam magnam sed blanditiis atque ipsam fugit minus',
            iconFgColor: 'var(--burnt-sienna)',
            iconBgColor: 'var(--azalea)'
        },
        {
            icon: <MdOutlineTheaters />,
            name: 'Acting',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam nesciunt facilis quam magnam sed blanditiis atque ipsam fugit minus',
            iconFgColor: 'var(--ebony-clay)',
            iconBgColor: 'var(--french-gray)'
        },
        {
            icon: <CgScreen />,
            name: 'Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam nesciunt facilis quam magnam sed blanditiis atque ipsam fugit minus',
            iconFgColor: 'var(--cornflower-blue)',
            iconBgColor: 'var(--tropical-blue)'
        }

    ]
    return (
        <div className={`custom-container ${styles?.['categories-container']}`}>
            <h4 className={styles?.['title']}>
                Choose <span className='success-color'>favourite</span> course from top category
            </h4>
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1  g-5">
                {
                    categoriesInfo.map((category, index) => {
                        return (
                            <div className="col" key={index}>
                                <CategoryCard {...category} />
                            </div>
                        );
                    })
                }
            </div>
        </div>

    );
}

export default Categories;