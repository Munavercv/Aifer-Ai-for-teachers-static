import React from 'react'
import './CallToAction.css'
import CTAButton from '../CTAButton/CTAButton'

const CallToAction = () => {
    return (
        <section className='call_to_action_sec'>
            <div className="container py-4">
                <h2 className='text-white'>Step Into the Future of Education</h2>

                <div className='text-center my-3'>
                    <CTAButton text='Enroll Now and Transform Your Teaching ' />
                </div>

            </div>
        </section>

    )
}

export default CallToAction
