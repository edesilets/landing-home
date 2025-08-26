import React from 'react';
import './Adventures.css';

const Adventures: React.FC = () => {
  return (
    <div className="adventures-container">
      <h1>Adventures</h1>
      <p>Check out my adventures on social media and fitness platforms!</p>
      <div className="social-links">
        <a
          href="https://www.instagram.com/ethan_in_the_wild/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link instagram-link"
        >
          <i className="fab fa-instagram fa-lg"></i>
          Follow on Instagram
        </a>
        <a
          href="https://connect.garmin.com/modern/profile/a624bd40-ba95-4b43-85ad-97e81321752e"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link garmin-link"
        >
          <i className="fa-solid fa-person-hiking fa-lg"></i>
          Connect on Garmin
        </a>
      </div>
      <div>
        <ul>
          <li> Garmin Activities</li>
          {/* <li> Only show non gym and walking Activities</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Adventures;