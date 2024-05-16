import { LuClock4 } from "react-icons/lu";
import './card.css'
const Card = ({ courseImg,icon, category,duration, title, description, instImg, instName, price,offer }) => {
    return (
        <div className='card shadow'>
            <img src={courseImg} alt="" />
            <div className="details">
                <div className="category">
                    <span className="icon">{icon}</span>
                    <span>{category}</span>
                </div>
                <div className="duration">
                    <span className="icon">
                        <LuClock4 />
                    </span>
                    <span>{duration}</span>
                </div>
            </div>
            <h5>{title}</h5>
            <p>{description}</p>
            <div className="details">
                <div className="inst-info">
                    <img src={instImg} alt="" />
                    <span>{instName}</span>
                </div>
                <div className="price">
                    <span className="before-off">${price}</span>
                    <span className="after-off">${price-price*offer}</ span>
                </div>
              
            </div>
        </div>
    );
}

export default Card;
