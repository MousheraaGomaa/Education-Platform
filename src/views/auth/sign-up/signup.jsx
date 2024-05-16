import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { toast } from 'react-toastify';

import Layout from '../../../components/shared/layout/layout'
import FormHeader from '../../../components/auth/form-header/form-header';

import { validateEmail, validatePassword, validateUsername } from '../../../services/auth'
import { objectToFormData } from '../../../utils/helper';
import { SignupRoute } from '../../../utils/apiRoutes';

import './signup.css'

const SignUp = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        Username: '',
        Password: '',
        Email: ''
    });
    const [errors, setErrors] = useState({
        Username: '',
        Password: '',
        Email: ''
    });
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    const onUpdateField = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const formValidate = () => {
        let formErrors = { Username: '', Password: '', Email: '' };
        formErrors.Email = validateEmail(data.Email);
        formErrors.Password = validatePassword(data.Password);
        formErrors.Username = validateUsername(data.Username);
        setErrors(formErrors)
        return !(formErrors.Email || formErrors.Password || formErrors.Username)
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (formValidate()) {
            let formData = objectToFormData({ ...data, Gender: 'Male', ConfirmPassword: data.Password });
            axios
                .post(SignupRoute, formData, { headers: { "Content-Type": "multipart/form-data" } })
                .then((res) => {
                    if (res.status === 201) {
                        toast.success(res.data.message)
                        navigate('/login');
                    }
                })
                .catch((err) => {
                    console.log(err)
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
            <div className="signup-container header-space">
                <div className="signup-img col-12 col-lg-6">
                    <img src="images/signup.jpg" alt="Sign Up" className='rounded w-100 h-100 object-fit-cover' />
                </div>
                <div className="signup-form col-12 col-lg-5 flex-1">

                    <FormHeader>Welcome To USAM, Let's create an account now</FormHeader>

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

                        <div className="input-field">
                            <label htmlFor="e-mail" className='label'>E-mail</label>
                            <div className="custom-input-container">
                                <input type="email" placeholder="Enter your e-mail" id="e-mail" name="Email" value={data.Email} onChange={onUpdateField} />
                            </div>
                            {errors.Email && <small className='text-danger'>{errors.Email}</small>}
                        </div>

                        <button className='mybtn dark-btn mt-4 d-block me-0 ms-auto'>Continue</button>

                    </form>
                    <div className="have-acc">
                        <span>Already have an account?</span>
                        <Link to={'/login'} className="link text-success">Login Now</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default SignUp;