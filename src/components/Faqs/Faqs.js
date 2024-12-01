import React from 'react'
import './Faqs.css'

const Faqs = () => {

    const faqData = [
        { id: 1, question: "What is the duration of the course?", answer: "The course spans 1 month with self-paced videos and live workshops." },
        { id: 2, question: "Do I need prior knowledge of AI?", answer: "Absolutely not! This course is designed for beginners." },
        { id: 3, question: "Will I get a certificate?", answer: "Yes, a certification will be provided upon successful completion." }
    ];

    return (
        <section>

            <div className="container py-5 px-4">
                <h2 className='section_title text-start' style={{color:'#003f3f'}}>FAQs</h2>
                <h4 className='section_subtitle mb-4 text-start'>Got Questions? We’ve Got Answers!</h4>

                <div className="accordion" id="accordionExample">
                    {faqData.map((faq, index) => (
                        <div className="accordion-item border-bottom mb-3" key={faq.id}>
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button fw-bolder collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${faq.id}`}
                                    aria-expanded={index === 0 ? 'true' : 'false'}
                                    aria-controls={`collapse${faq.id}`}
                                >
                                    {faq.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${faq.id}`}
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body mb-3">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Faqs
