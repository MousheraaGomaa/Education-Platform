import { useNavigate } from "react-router-dom";
import { BiCalendar } from "react-icons/bi";
import { MdEditNote } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import Floatdiv from '../../shared/float-div/floatdiv/floatdiv'
import FloatdivImg from '../../shared/float-div/floatdiv-img/floatdiv-img'
import Layout from './../../shared/layout/layout';

import './banner.css'

const Banner = () => {

    const navigate = useNavigate();

    const handleSubscribe = () => {
        navigate('/choose-subscription')
    }
    const joinMeeting = () => {

    }
    return (
        <div className="hero-section">
            <Layout>
                <div className="content header-space justify-content-md-between gap-4 ">
                    <div className="left-section col-12   col-md-4 col-lg-4 ">
                        <h1>
                            <span className='bronze-color'>Studying</span> Online is now
                            <br/>
                            much easier
                        </h1>
                        <p>
                            USAM is an interesting platform that will teach
                            <br/>
                            you in more an interactive way
                        </p>
                        <button onClick={handleSubscribe}>Subscribe</button>
                    </div>
                    <div className="right-section col-12  col-md-7 col-lg-6">
                        <Floatdiv
                            icon={<MdEditNote />}
                            text1='Heyyy'
                            text2='Track your last progress'
                        />
                        <Floatdiv
                            icon={<BiCalendar />}
                            text1='250k'
                            text2='Assisted Student'
                        />
                        <Floatdiv
                            iconClass='bg-bronze'
                            icon={<MdEmail />}
                            text1='Congratulations'
                            text2='Your admission completed'
                        />
                        <FloatdivImg
                            img='images/avatar-boy-img.jpg'
                            text1='User Experience Class'
                            text2='Today at 12.00 Pm'
                            btnLabel='Join Now'
                            joinMeeting={joinMeeting}
                        />
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Banner;
