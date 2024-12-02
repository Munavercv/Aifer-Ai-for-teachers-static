import React from 'react'
import './WhyThisCourse.css'

const WhyThisCourse = () => {
  return (
    <section>
        <div className="container py-4">
                <h2 className='section_title text-start' style={{color:'#003f3f'}}>Why This Course?</h2>
                <h4 className='section_subtitle mb-md-4 mb-2 text-start' style={{color:'#003f3f'}}>Your Edge in Modern Teaching</h4>

                <div>
                    <dl className='why_this_course_list ms-md-5  ms-5'>
                        <dt>Save Time: </dt>
                        <dd>Automate repetitive tasks and focus on teaching.</dd>

                        <dt>Boost Engagement: </dt>
                        <dd>Create captivating and personalized learning experiences.</dd>

                        <dt>Future-Proof Your Skills: </dt>
                        <dd>Stay relevant in the rapidly evolving world of</dd>
                    </dl>
                </div>

            </div>
    </section>
  )
}

export default WhyThisCourse
