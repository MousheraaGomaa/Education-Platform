import { MdOutlineStar } from "react-icons/md";

import './rating.css'
const Rating = ({ rate }) => {

    const maxRating = 5;
    const fullStarts = Math.round(rate);
    return (
        <div className="rating">
            {
                Array.from(Array(maxRating), (value,index) => {
                    if(index < fullStarts)
                        return <MdOutlineStar className="rating-star" key={index} />
                    else
                        return <MdOutlineStar className="needed-star" key={index} />
                })
            }
        </div>
    );
}

export default Rating;