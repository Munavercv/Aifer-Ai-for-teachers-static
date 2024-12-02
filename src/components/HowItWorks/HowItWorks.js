import React from 'react'
import './HowItWorks.css'
import CTAButton from '../CTAButton/CTAButton'

const HowItWorks = () => {
    return (
        <section className='howItWorks_sec'>
            <div className="container px-4 py-5" id="featured-3">

                <h2 className='section_title mb-3'>How It Works</h2>
                <h4 className='section_subtitle mb-1 text-start'>Flexible and Engaging Learning Format</h4>

                <hr class="border border-black border-1 opacity-75" style={{width:'20%'}} />

                <div className="row g-4 py-4 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-3 mb-3">
                            <i className="fa-solid fa-laptop"></i>
                        </div>
                        <h3 className="fs-4 fw-bold">On-Demand Video Sessions</h3>
                        <p>Learn at your own pace with structured modules.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-3 mb-3">
                            <i className="fa-solid fa-chalkboard-user"></i>
                        </div>
                        <h3 className="fs-4 fw-bold">Live Q&A Workshops</h3>
                        <p>Interact with experts, solve doubts, and refine your skills.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-3 mb-3">
                            <i className="fa-solid fa-person-chalkboard"></i>
                        </div>
                        <h3 className="fs-4 fw-bold">Capstone Project</h3>
                        <p>Apply your learning to create real-world classroom solutions.</p>
                    </div>
                </div>

                <div className='text-center mt-3'>
                    <CTAButton text={'Start Your AI Journey Today….'}/>
                </div>
            </div>

        </section>
    )
}

export default HowItWorks
