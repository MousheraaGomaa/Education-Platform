import { BiCalendar } from "react-icons/bi";
import { FaFileInvoice } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import ServiceCard from './../service-card/service-card';
import './organization-services.css'
const OrganizationServices = () => {
    const servicesData = [
        {
            icon: <FaFileInvoice />,
            title: 'Online Billing, Invoicing & Contracts',
            description: `
                Simple and secure control of your organization's
                financial and legal transactions.
                Send customized invoices and contracts
            `
        },
        {
            icon: <BiCalendar />,
            title: 'Easy Scheduling & Attendance Tracking',
            description: `
                Schedule and reserve classrooms at
                one campus or multiple campuses.
                keep detailed records of student attendace
            `
        },
        {
            icon: <FaUsers />,
            title: 'Customer Tracking',
            description: `
                Automate and track emails to indivduals or groups.
                Skilline's built-in system helps organize your organization
            `
        }
    ];
    return (
        <section className="services">
            <h3>All-In-One <span className="success-color">Cloud Software.</span></h3>
            <p className="col-md-8 col-lg-6">
                USAM is one powerful online software suite
                that combines all the tools needed to run a successful school or office.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4">
                {
                    servicesData.map((service , index) => {
                        return (
                            <ServiceCard  {...service} key={index} />
                        )
                    })
                }

            </div>
        </section>
    );
}

export default OrganizationServices;
