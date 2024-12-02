import React, { useState } from 'react';
import './CTAButton.css';
import EnrollPopup from '../EnrollPopup/EnrollPopup';

const CTAButton = ({ text }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <button className="cta-btn" onClick={handleButtonClick}>
                {text}
            </button>

            {showPopup && (
                <EnrollPopup
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
};

export default CTAButton;
