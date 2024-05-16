import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { toast } from 'react-toastify';

import Layout from '../../../components/shared/layout/layout'
import FormHeader from '../../../components/auth/form-header/form-header';
import { validatePassword, validateUsername } from '../../../services/auth';
import { objectToFormData } from '../../../utils/helper';
import { LoginRoute } from '../../../utils/apiRoutes';

import { useTheme } from '../../../contexts/theme.context';

import './login.css'

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [data, setData] = useState({
        Username: '',
        Password: '',
    });
    const [errors, setErrors] = useState({
        Username: '',
        Password: '',
    });
    const {theme,toggleTheme} = useTheme();
    useEffect(()=>{
        if(theme==='dark'){
            toggleTheme();
        }
    },[theme,toggleTheme])
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    const onUpdateField = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const formValidate = () => {
        let formErrors = { Username: '', Password: '' };
        formErrors.Password = validatePassword(data.Password);
        formErrors.Username = validateUsername(data.Username);
        setErrors(formErrors)
        return !(formErrors.Password || formErrors.Username)
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (formValidate()) {
            let formData = objectToFormData({ ...data, rememberMe });
            axios
                .post(LoginRoute, formData, { headers: { "Content-Type": "multipart/form-data" } })
                .then((res) => {
                    if (res.status === 200) {
                        localStorage.setItem('token', res.data.token);
                        toast.success(res.data.message)
                        navigate('/');
                    }
                })
                .catch((err) => {
                    if (err.response)
                        toast.error(err.response?.data.message)
                    else {
                        toast.error(err.message)
                    }
                });
        }
    }

    return (
        <Layout>
            <div className="login-container header-space">
                <div className="login-img col-12 col-lg-6">
                    <img src="images/login.jpg" alt="Login" className='rounded w-100 h-100 object-fit-cover' />
                </div>

                <div className="login-form col-12 col-lg-5 flex-1">

                    <FormHeader>Welcom To USAM, If you have an account login now</FormHeader>

                    <form className='mt-4' onSubmit={onSubmitForm}>

                        <div className="input-field">
                            <label htmlFor="username" className='label'>User name</label>
                            <div className="custom-input-container">
                                <input type="text" placeholder="Enter your User name" id="username" name="Username" value={data.Username} onChange={onUpdateField} />
                            </div>
                            {errors.Username && <small className='text-danger'>{errors.Username}</small>}
                        </div>

                        <div className="input-field">
                            <label htmlFor="password" className='label'>Password</label>
                            <div className="custom-input-container">
                                <input type={showPassword ? "text" : "password"} placeholder="Enter your Password" id="password" name="Password" value={data.Password} onChange={onUpdateField} />
                                <BiSolidShow className='icon-show' display={showPassword ? 'inline' : 'none'} onClick={togglePasswordVisibility} />
                                <BiSolidHide className='icon-hide' display={showPassword ? 'none' : 'inline'} onClick={togglePasswordVisibility} />
                            </div>
                            {errors.Password && <small className='text-danger'>{errors.Password}</small>}
                        </div>

                        <div className='remember-forgot-container'>
                            <div className="remember-me">
                                <input type="checkbox" id='remember-me' checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <Link to='/forgot-password' className='link'>Forgot Password?</Link>
                        </div>

                        <button className='mybtn dark-btn d-block me-0 ms-auto'>Login</button>

                    </form>
                    <div className="have-acc">
                        <span>Don't have an account? </span>
                        <Link to={'/signup'} className="link text-success ">Register Now</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Login;