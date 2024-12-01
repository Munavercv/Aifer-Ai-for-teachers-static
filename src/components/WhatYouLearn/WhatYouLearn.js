import React from 'react'
import './WhatYouLearn.css'

const WhatYouLearn = () => {
  return (
    <section className='WhatYouLearn_sec'>
      <div className="container py-5">
        <h2 className='section_title text-white'>What You’ll Learn?</h2>
        <h4 className='section_subtitle text-white mb-3'>Master AI in <strong>6</strong> Dynamic Modules</h4>

        <hr className='mb-5 border-white border-2' />

        <dl className='row row-cols-lg-3 px-0 text-white fs-5'>

          <div className='fw-light mb-3'>
            <dt className='fw-bold'>Foundations of AI in Education:</dt>
            <dd>Explore how AI is shaping the future of learning.</dd>
          </div>

          <div className='fw-light mb-3'>
            <dt className='fw-bold'>AI Tools for Teachers:</dt>
            <dd>Get hands-on with tools like ChatGPT, Canva, and Many other.</dd>
          </div>

          <div className='fw-light mb-3'>
            <dt className='fw-bold'>Personalized Learning with AI:</dt>
            <dd>Discover techniques to tailor lessons for every learner.</dd>
          </div>

          <div className='fw-light mb-3'>
            <dt className='fw-bold'>Prompt Crafting for Educators:</dt>
            <dd>Learn to guide AI tools effectively with smart prompt engineering.</dd>
          </div>

          <div className='fw-light mb-3'>
            <dt className='fw-bold'>Seamless AI Integration:</dt>
            <dd>Transform your teaching with actionable classroom strategies.</dd>
          </div>

          <div className='fw-light'>
            <dt className='fw-bold'>Capstone Project:</dt>
            <dd>Design your very own AI-powered lesson plan or teaching method.</dd>
          </div>

        </dl>

      </div>
    </section>
  )
}

export default WhatYouLearn
