import React from 'react'
import './WhyChooseAi.css'

const WhyChooseAi = () => {
    return (
        <section className='WhyChooseAi_sec'>
            <div className="container px-4 py-5" id="icon-grid">
                <h2 className='section_title text-black'>Why Choose AI for Teachers?</h2>
                <h4 className='section_subtitle'>Stay Ahead in the Classroom Revolution</h4>
                <hr />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
                    <div className="col d-flex align-items-start">
                        <div className="check-icon me-2">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Supercharge Efficiency</h3>
                            <p>Use AI tools to automate grading, lesson planning, and administrative tasks.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="check-icon me-2">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Personalize Learning</h3>
                            <p>Adapt teaching strategies to match each student’s needs effortlessly.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="check-icon me-2">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Focus on Teaching</h3>
                            <p>Save time and devote more energy to what matters most—engaging your students.</p>
                        </div>
                    </div>

                </div>

                <hr className="border border-black border-2 opacity-75"/>

                {/* Features with icon */}
                <div className="row g-5 px-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col text-center">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <i className="fa-solid fa-chalkboard-user"></i>
                        </div>
                        <h3 className="fs-3 fw-light">Expert-Led Modules</h3>

                    </div>
                    <div className="feature col text-center">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <i className="fa-solid fa-desktop"></i>
                        </div>
                        <h3 className="fs-3 fw-light">Hands-On AI Tools </h3>

                    </div>
                    <div className="feature col text-center">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <i className="fa-solid fa-certificate"></i>
                        </div>
                        <h3 className="fs-3 fw-light">Recognized Certification</h3>

                    </div>

                </div>
            </div>


        </section>
    )
}

export default WhyChooseAi
