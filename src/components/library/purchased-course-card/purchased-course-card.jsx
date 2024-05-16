import ProgressBar from 'react-bootstrap/ProgressBar';

import styles from './purchased-course-card.module.css'

const PurchasedCourseCard = ({course}) => {
    const { title, instructor, image, progress, totalLessons } = course;
    return (
        <div className={`${styles.card}`}>
            <img className={`${styles['course-img']}`} src={image} alt={title} />
            <h5 className={`${styles.title}`}>{title}</h5>
            <img className={`${styles['inst-img']}`} src={instructor?.image} alt={instructor?.name} />
            <span className={`${styles['inst-name']}`}>{instructor?.name}</span>
            <ProgressBar className={`${styles.progress} `} now={(progress/totalLessons)*100}/>
            <p className={`${styles['progress-label']}`}>Lesson {progress} of {totalLessons}</p>
        
        </div>
    );
}

export default PurchasedCourseCard;
