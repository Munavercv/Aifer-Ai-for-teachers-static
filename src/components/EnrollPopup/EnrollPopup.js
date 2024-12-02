import React from 'react';
import './EnrollPopup.css';
import offerPoster from '../../assets/offer_popup.jpg';

const EnrollPopup = ({ onClose }) => {

    const handlePosterButtonClick = () => {
        alert('Enroll Now Button Clicked!');
      };

  return (
    <div className="popup-overlay">
      <div className="popup-content">

        <div className="image-container">
          <img src={offerPoster} alt="Offer Poster" className="popup-image" />

          <button
            className="poster-btn"
            onClick={handlePosterButtonClick}
            aria-label="Enroll Now Button"
          />
        </div>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default EnrollPopup;
