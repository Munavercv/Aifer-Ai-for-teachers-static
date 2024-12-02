import React from 'react'
import './CourseDetails.css'

const CourseDetails = () => {

    return (
        <section className='courseDetails_sec'>
            <div className="container py-4">
                <h2 className='section_title text-start' style={{color:'#003f3f'}}>Course Details</h2>
                <h4 className='section_subtitle mb-md-5 mb-3 text-start' style={{color:'#003f3f'}}>All You Need to Know</h4>

                <div className='mt-3'>

                        <ul className='course_details_list ms-md-3  ms-1'>
                            <li><span>Duration: </span>1 Month (Self-paced + Live Sessions)</li>
                            <li><span>Delivery Mode: </span>Hybrid (10 Hours Recorded, 3 Hours Live)</li>
                            <li><span>Certification: </span>Yes, upon successful completion.</li>
                        </ul>

                </div>

            </div>
        </section>
    )
}

export default CourseDetails
