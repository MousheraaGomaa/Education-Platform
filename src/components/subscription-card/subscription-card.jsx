import { GrFormCheckmark } from "react-icons/gr";
import SvgPainter from "../shared/svg-painter/svg-painter";

import './subscription-card.css'

const SubscriptionCard = ({ plan, price, features, icon, btnLabel, selected, onSelect,best }) => {
    return (
        <div className = {`subscription-card ${plan?.trim().toLowerCase()}`}>

            <SvgPainter Tcolor='#cfe8fd' Bcolor='#224361' />

            <div className="plan d-flex gap-1 align-items-center">
                { icon }
                <h5 className="success-color mb-0">{plan}</h5>
                {best ? <span className="ms-auto">BEST!</span>:''}
            </div>

            <p className="price">{price[0]} <span>{price[1]}</span></p>

            <div className="features mb-auto">
                <ul className="myul">
                    {
                        features.map((feature,index) => {
                            return (
                                <li className="d-flex align-items-center gap-3 mb-4" key={index}>
                                    <span className = {`checkmark-circle-icon`}>
                                        <GrFormCheckmark />
                                    </span>
                                    <span className="feature-text">
                                       {feature}
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <button onClick={ ()=>onSelect(plan) } className={`light-btn ${ selected ? 'active-btn' : '' }`}>{ btnLabel }</button>
        </div>
    )
}

export default SubscriptionCard;
