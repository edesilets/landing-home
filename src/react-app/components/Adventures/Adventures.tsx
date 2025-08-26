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
        >
          <i className="fab fa-instagram fa-lg"></i>
          <span>Follow on Instagram</span>
        </a>
        <a
          href="https://connect.garmin.com/modern/profile/a624bd40-ba95-4b43-85ad-97e81321752e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-person-hiking fa-lg"></i>
          <span>Connect on Garmin</span>
        </a>
        <a
          href="https://www.strava.com/athletes/16920867"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-strava fa-lg"></i>
          <span>Connect on Strava</span>
        </a>
      </div>
      {/* <div>
        <ul>
          <li> Garmin Activities</li>
          <li> Only show non gym and walking Activities</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Adventures;