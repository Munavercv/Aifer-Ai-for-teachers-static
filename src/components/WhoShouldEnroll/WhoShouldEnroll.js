import React from 'react'
import './WhoShouldEnroll.css'

const WhoShouldEnroll = () => {
    return (
        <section className='WhoShouldEnroll_sec'>
            <div className="container px-4 py-3" id="featured-3">

                <h2 className='section_title mb-3'>Who Should Enroll?</h2>
                <h4 className='section_subtitle mb-1 text-start'>Empowering Every Educator</h4>

                <hr class="border border-black border-1 opacity-75" style={{ width: '40%' }} />

                <div className="row g-4 py-4 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-3 mb-3">
                            <i class="fa-solid fa-school"></i>
                        </div>
                        <h3 className="fs-4 fw-bold">School Teachers</h3>
                        <p>Simplify daily teaching tasks with smart tools.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-3 mb-3">
                            <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <h3 className="fs-4 fw-bold">College Professors</h3>
                        <p>Personalize education for greater student success.</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-3 mb-3">
                            <i class="fa-solid fa-book"></i>
                        </div>
                        <h3 className="fs-4 fw-bold">Academic Leaders</h3>
                        <p>Implement AI-driven innovations in your institution.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhoShouldEnroll
