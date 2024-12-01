import React from 'react'
import './CTAButton.css'

const CTAButton = ({ text }) => {
    return (
        <div>
            <button className="cta-btn">{text}</button>
        </div>
    )
}

export default CTAButton
