import './features.css'

const Features = () => {

    return (
        <section className="features">
            <div className="feature justify-content-lg-between">
                <div className='feature-info col-lg-8 '>
                    <h3>
                        <span className='success-color'>Screen Reader</span> Feature
                    </h3>
                    <p>
                        It's a new feature for people who has disabilities, It's often available in
                        multiple languages to cater to users worldwide, often support Braille
                        displays, Which provide tactile output to users who are proficient in Braille.
                    </p>
                </div>
                <div className="feature-img">
                    <img src="images/home/blind.jpg" alt="" className='rounded-circle' />
                </div>
            </div>
            <div className="feature justify-content-lg-between">
                <div className="feature-img-left col-lg-5">
                    <img src="images/home/teacher-img1.png" alt="" />
                </div>
                <div className='feature-info col-lg-6'>
                    <h3>
                        <span className='success-color'>Chat</span> With Instructors
                    </h3>
                    <p>
                        There are available instructors any time to
                        help students who need to understand any thing.
                        Students will be more comfortable with this feature as
                        the want instructor to follow their progress and it will
                        make courses and learning easier.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Features;