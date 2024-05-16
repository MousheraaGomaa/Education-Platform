import { NavLink, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

import Search from './../search/search';
import Layout from './../layout/layout';
import { useTheme } from '../../../contexts/theme.context';
import './header.css'


const Header = ({ handleShowSidebar }) => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const login = () => {
        navigate('/login')
    }
    const signup = () => {
        navigate('/signup')
    }
    return (
        <nav className={`navbar ${ theme }`}>
            <Layout>
                <div className="nav-container">
                    <div className="logo">
                        <span className='custom-icon logo-icon-header'>
                            <img src="images/logo-lg.png" alt="" />
                        </span>
                    </div>
                    <div className="menu-icon" onClick={handleShowSidebar}>
                        <GiHamburgerMenu />
                    </div>
                    <div className="nav-elements col-xl-4 col-lg-5">
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/courses">Courses</NavLink>
                            </li>
                            <li>
                                <NavLink to="/careers">Careers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile">Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutUs">About Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='auth-search col-lg-5 col-xl-6' >
                        <Search />
                        <button className='dark-btn login-btn' onClick={login}>Login</button>
                        <button className='dark-btn signup-btn ' onClick={signup}>Sign Up</button>
                    </div>
                </div>
            </Layout>
        </nav>
    );
}

export default Header;
