import React from 'react'
import './HomeBanner.css'
import CTAButton from '../CTAButton/CTAButton'

const HomeBanner = () => {
    return (
        <section className='home_banner'>
            <div className="container py-sm-5 py-3">
                <div className="row">

                    <div className="col-md-12 text-center content">
                        <h2 className='mb-3'>Revolutionize Your Classroom <br /> with AI</h2>
                        <h4 className='mb-4'>Unlock the power of AI to transform teaching, simplify tasks, and inspire students <br/> like never before.</h4>

                        <div className='mt-5'>
                            <CTAButton text='Get Started Now' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HomeBanner
