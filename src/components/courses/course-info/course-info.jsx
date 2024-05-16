import { memo } from 'react'
import Rating from './../../shared/rating/rating';
import './course-info.css'
const CourseInfo = () => {
    return (
        <div className="course-info">
            <section>
                <h5>
                    O6 Super Coins on the way
                </h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut similique nostrum enim, dignissimos autem molestiae nobis voluptatum blanditiis odit deserunt sequi et, fugit odio facilis molestias harum iure facere. Voluptate?
                </p>
            </section>
            <section>
                <h5>
                    Who this course is for?
                </h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut similique nostrum enim, dignissimos autem molestiae nobis voluptatum blanditiis odit deserunt sequi et, fugit odio facilis molestias harum iure facere. Voluptate?
                </p>
            </section>
            <section>
                <h5>
                    Achievable
                </h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut similique nostrum enim, dignissimos autem molestiae nobis voluptatum blanditiis odit deserunt sequi et, fugit odio facilis molestias harum iure facere. Voluptate?
                </p>
            </section>
            <div className="instructor-section">
                <div className="inst-info">
                    <img src="images/avatar-girl-img.jpg" alt="" />
                    <div className="instructor-details">
                        <h6>Bulkin Simons</h6>
                        <Rating rate={4} />
                    </div>

                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis dolor nihil assumenda at debitis labore laudantium voluptatibus possimus cumque nam hic molestias beatae quasi id, pariatur neque et cum?
                </p>
            </div>
        </div>
    );
}

export default memo(CourseInfo);