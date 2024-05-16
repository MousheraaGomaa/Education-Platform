import './service-card.css'
const ServiceCard = ({icon , title, description }) => {
    return (
        <div className="service-card col-sm-10 col-md-5 col-xl-3">
            <span className="custom-icon icon">
                { icon }
            </span>
            <h5 className="success-color ">
                { title }
            </h5>
            <p className='w-md-50 '>
                { description }
            </p>
        </div>
    );
}

export default ServiceCard;
