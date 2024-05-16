import axios from 'axios';
import { memo } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { LoginGoogleRoute, LoginFacebookRoute } from '../../../utils/apiRoutes'
import { LoginSocialGoogle, LoginSocialFacebook } from 'reactjs-social-login';
import './form-header.css'

function FormHeader(props) {

    const navigate = useNavigate();

    const AppID = '924650135356045'
    const clientID = "918524560583-famrh43oojdd4ebjrf3k02b47rim1hja.apps.googleusercontent.com"

    const handleResolve = (response) => {
        console.log(response)
        let pictureUrl = '';
        let route = '';
        let { email, name, picture } = response.data

        if (response.provider === 'google') {
            pictureUrl = picture 
            route = LoginGoogleRoute 
        }
        else{
            pictureUrl = picture.data.url
            route = LoginFacebookRoute 
        }
        
        axios
            .post(route, { data: { email, name, pictureUrl } })
            .then((res) => {
                if (res.data?.status === 201) {
                    localStorage.setItem('token', res.data.token);
                    navigate('/')
                }
            })
            .catch((err) => {
                toast.error(err.message)
            });

    }
    const handleReject = (error) => {
        toast.error(error.message)
    }
    return (
        <div className="header-container">
            <h2>{props.children}</h2>
            <div className="login-btns">
                <span className='me-2'>Or Connect With</span>
                <LoginSocialFacebook
                    appId={AppID}
                    onResolve={handleResolve}
                    onReject={handleReject}
                >
                    <img src="images/facebook.png" alt="" />
                </LoginSocialFacebook>
                <LoginSocialGoogle
                    client_id={clientID}
                    onResolve={handleResolve}
                    onReject={handleReject}
                >
                    <img src="images/icon-google.png" alt="" />
                </LoginSocialGoogle>
            </div>

        </div>

    );
}

export default memo(FormHeader);