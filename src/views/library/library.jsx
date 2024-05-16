
import PurchasedCourses from './../../components/library/purshased-courses/purchased-courses';
import Categories from './../../components/library/categories/categories';
import CoursesSection from './../../components/library/courses-section/courses-section';

import styles from './library.module.css'

const Library = () => {

    return (
        <div className={` ${styles['library-container']} header-space`}>
            <PurchasedCourses />
            <Categories />
            <CoursesSection
                bgColor='var(--aqua-haze)'
                paddingBlock='60px 120px'
                seeAllLink='/courses/recommended'
            >
                <span className="success-color">Recommended</span> for you
            </CoursesSection>
            <CoursesSection
                bgColor='white'
                paddingBlock='50px 25px'
                seeAllLink='/courses'
            >
                Get <span className="success-color">choice</span> of your course
            </CoursesSection>

            <CoursesSection
                bgColor='white'
                paddingBlock='25px 50px'
                seeAllLink='/courses?type=1'
            >
                The courses in <span className="success-color">personal development</span>
            </CoursesSection>
            <CoursesSection
                bgColor='var(--aqua-haze)'
                paddingBlock='50px 100px'
                seeAllLink='/courses/related'
            >
                Students are viewing 
            </CoursesSection>
        </div>
    )
}

export default Library;