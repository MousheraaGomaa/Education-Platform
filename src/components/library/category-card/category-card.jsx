

import styles from './category-card.module.css';

const CategoryCard = ({iconFgColor,iconBgColor,name,description,icon}) => {
    return (
        <div className={styles['category-card']}>
           <div className={styles['icon-div']} style={{backgroundColor:iconBgColor,color:iconFgColor}}>
                {
                    icon
                }
           </div> 
           <h5 className={styles['title']}>{name}</h5>
           <p className={styles['description']}>{description}</p>
        </div>
    );
}

export default CategoryCard;
