import { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/theme.context'
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";



import SubscriptionCard from "../../components/subscription-card/subscription-card";
import Breadcrumbs from './../../components/shared/breadcrumbs/breadcrumbs';
import Layout from './../../components/shared/layout/layout'
import './choose-subscription-fees.css'



const ChooseSubscriptionFees = () => {

    const subscriptionsData = [
        {
            plan: 'Like a pussy',
            price: ['$500', '/ YEAR'],
            features: [
                'Components-driven system',
                'Sales-boosting landing pages',
                'Awesome Feather icons pack'
            ],
            btnLabel: 'Subscribe now',
            best: false,
            icon: ''
        },
        {
            plan: 'Individual',
            price: ['$24', '/ MONTH'],
            features: [
                'Components-driven system',
                'Sales-boosting landing pages',
                'Awesome Feather icons pack',
                'Themed into 3 different styles',
                'Will help to learn Figma'
            ],
            btnLabel: 'Regular license',
            best: true,
            icon: <IoIosPerson className="svg--gradient-fill plan-icon" />
        },
        {
            plan: 'Corporate',
            price: ['$12', '/ EDITOR'],
            features: [
                'Components-driven system',
                'Sales-boosting landing pages',
                'Awesome Feather icons pack',
                'Themed into 3 different styles',
            ],
            btnLabel: 'Extended license',
            best: false,
            icon: <FaPeopleGroup className="svg--gradient-fill plan-icon" />
        },

    ]
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState('');
    const {theme,toggleTheme} = useTheme();
    useEffect(()=>{
        if(theme==='dark'){
            toggleTheme();
        }
    },[theme,toggleTheme])
    const onSelect = (plan) => {
        setSelectedPlan(plan)
    }
    const continueSubscription = () => {
        navigate('/payment')
    }
    return (
        <div className="subscription-container header-space">
            <Layout>
            <Breadcrumbs />
            <div className="subscription-header">
                <h2 >
                    Choose your subscription with
                    <span className='success-color'> affordable price</span>
                </h2>
                <span>And enjoy with all courses</span>
            </div>
            <div className="subscription-cards my-4">
                {
                    subscriptionsData.map((subscription, index) => {
                        return <SubscriptionCard 
                                    selected={ selectedPlan === subscription.plan } 
                                    onSelect={onSelect} {...subscription} key={index} 
                                />
                    })
                }
            </div>
            <div className="action">
                <button className="mybtn dark-btn" onClick={continueSubscription}>Continue</button>
            </div>
            </Layout>
        </div>
    )
}

export default ChooseSubscriptionFees