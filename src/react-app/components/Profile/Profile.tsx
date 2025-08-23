import React from 'react';
import profilePicture from '../../assets/profile2024.jpg';
import './Profile.css';

// Define the ProfileInfo interface
export interface ProfileInfo {
  fullName: string;
  occupation: string;
  location: {
    broad: string;
    region: string;
    country: string;
  };
}

export interface ProfileProps {
  profileInfo?: ProfileInfo;
}

const defaultProfileInfo: ProfileInfo = {
  fullName: "Ethan Desilets",
  occupation: "Software Engineer",
  location: {
    broad: "Greater Boston",
    region: "East Coast",
    country: "USA"
  }
};

const Profile: React.FC<ProfileProps> = ({ profileInfo = defaultProfileInfo }) => {
  return (
    <div className="profile-container">
      <a
        href="https://www.linkedin.com/in/ethandesilets/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Ethan's LinkedIn profile"
      >
        <img
          src={profilePicture}
          className="user-photo"
          alt={`${profileInfo.fullName} - Profile Picture`}
        />
      </a>
      <h1 className="profile-name">{profileInfo.fullName}</h1>
      <p className="profile-occupation">{profileInfo.occupation}</p>
      <p className="profile-location">
        {profileInfo.location.broad}, {profileInfo.location.region}, {profileInfo.location.country}
      </p>
    </div>
  );
};

export default Profile;