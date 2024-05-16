import './floatdiv.css'

const Floatdiv = ({ icon, text1, text2, iconClass }) => {
    return (
        <div className='floatdiv align-items-center' >
            <span className={`icon custom-icon ${iconClass ? iconClass : ''} `}>
                {icon}
            </span>
            <div className="text">
                <h5>{text1}</h5>
                <h6>{text2}</h6>
            </div>
        </div>
    );
}

export default Floatdiv;
