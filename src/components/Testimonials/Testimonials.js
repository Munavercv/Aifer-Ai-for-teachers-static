import React from 'react'
import './Testimonials.css'

const Testimonials = () => {

    const testimonials = [
        { name: 'Anjali S', designation: 'School Teacher', quote: 'This course was a game-changer! AI tools now make my lesson planning more creative and efficient.' },
        { name: 'Dr. Ramesh P', designation: 'College Professor', quote: 'The personalized learning insights I gained here have revolutionized my teaching approach.' }
    ]

    return (
        <section className='testimonials_sec bg-light'>
            <div className="container py-4">
                <h2 className='section_title mb-4'>Hear from Fellow Educators</h2>
                <div className="row justify-content-center">

                    { testimonials.map((testimonial, index) => (
                        <div className="col-lg-3 col-md-4 mb-3" key={index}>
                            <div className="card border-0 shadow-sm p-3 rounded-4">
                                <i className="fa-solid fa-quote-left"></i>
                                <p className='text-center'>{testimonial.quote}.</p>
                                <p className='text-center'>- <strong> {testimonial.name}</strong>., {testimonial.designation}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Testimonials
