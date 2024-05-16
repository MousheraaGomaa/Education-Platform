import { Outlet } from 'react-router-dom'
import SidebarContent from '../../components/profile/sidebar-content/sidebar-content';
import styles from './profile.module.css'
const Profile = ()=>{
   return(
    <div className="profile-container header-space">
        <SidebarContent/>
        <Outlet/>
    </div>
   )
}

export default Profile;