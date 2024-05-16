import { memo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import './breadcrumbs.css'
const Breadcrumbs = () => {
    const pathsLabel = {
        'signup': 'Enter Your Data',
        'payment': 'Pay Fees',
        'choose-subscription': 'Choose Your Subscription'
    }
    const location = useLocation();
    let currentLink = ''
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb)
        .map((crumb, index, pathnameArr) => {
            currentLink += `/${crumb}`;
            let isActive = index === pathnameArr.length - 1 ? 'active-color' : 'inactive-color';
            return (
                <li className='crumb' key={index}>
                    {index ? <MdKeyboardDoubleArrowRight className={` mx-2 ${isActive}`} /> : ''}
                    <Link to={ currentLink } className={`link ${ isActive }`}>{ pathsLabel[crumb] }</Link>
                </li>
            )
        })
    return (
        <ol className="crumbs-container  myul">
            {
                crumbs
            }
        </ol>
    )

}

export default memo( Breadcrumbs) ;