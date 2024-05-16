import { useEffect } from 'react'
import { useTheme } from '../../contexts/theme.context'
import {
    Banner,
    OrganizationSuccess,
    OrganizationServices,
    AboutOrganization,
    Features,
    Courses
} from './../../components/home'
import Layout from '../../components/shared/layout/layout'
import './home.css'

const Home = () => {
    const { theme, toggleTheme } = useTheme();
    useEffect(() => {
        if (theme === 'light') {
            console.log(theme)
            toggleTheme();
        }
    }, [theme, toggleTheme])
    return (
        <div className='home'>
            <Banner />
            <Layout>
                <div className='home-content'>
                    <OrganizationSuccess />
                    <OrganizationServices />
                    <AboutOrganization />
                    <Features />
                    <Courses />
                </div>
            </Layout>
        </div>
    );
}

export default Home;