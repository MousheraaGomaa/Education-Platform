
import './about-organization.css'

const AboutOrganization = () => {
    return (
        <section>
            <div className='about-organization mb-4'>
                <h3>What is <span className='success-color'>USAM?</span></h3>
                <p>
                    USAM is a platform that allows educators to create online classes whereby they can
                    store the courses materials online; manage assignments, quizzes and exams; monitor
                    due dates; grade results and provide students with feedback all in one place.
                </p>
                <div className="organization-join">
                    <div className='instructors col-lg-5  col-10'>
                        <div className="overlay-bg"></div>
                        <div className="content">
                            <h3>FOR INSTRUCTORS</h3>
                            <button>Start a class today</button>
                        </div>
                    </div>
                    <div className='students col-lg-5  col-10'>
                        <div className="overlay-bg"></div>
                        <div className="content">
                            <h3>FOR STUDENTS</h3>
                            <button>Enter access code</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutOrganization;
