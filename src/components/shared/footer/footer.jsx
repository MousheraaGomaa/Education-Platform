import { useState } from 'react';

import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');

    const setEmailValue = (e) => {
        setEmail(e.target.value);
    }
    const subscribe = ()=>{
        
    }
    return (
        <footer >
            <div className="logo">
                <span className="custom-icon">
                    <img src="images/logo.png" alt="Logo" />
                </span>

                <div className="vl"></div>
                <h4>
                    Your Best
                    <br />
                    Platform
                </h4>
            </div>
            <div className="subscribe">
                <h4>
                    Subscribe to get our Newsletter
                </h4>
                <div className="subscribe-action">
                    <input placeholder="Your Email" value={email} onChange={setEmailValue} className='col-lg-4 col-md-4 col-sm-10 ' /> 
                    <button className='dark-btn mybtn' onClick={subscribe} >Subscribe</button>
                </div>
            </div>
            <div className="privacy">
                <Link to='/careers ' className='link'>Careers </Link> |
                <Link to='/privacy' className='link'>Privacy Policy</Link> |
                <Link to='/conditions' className='link'>Terms & Conditions</Link>
            </div>
            <p className='copyright'>&copy; 2023 Class Technologies Inc.</p>
        </footer>
    );
}


export default Footer;