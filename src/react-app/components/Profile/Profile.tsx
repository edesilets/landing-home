import React from 'react';
import profilePicture from '../../assets/profile2024.jpg';
import UserResponse from '../../types';
import './Profile.css';

export interface ProfileProps {
  user: UserResponse | null;
  loading: boolean;
  error: string | null;
}

const Profile: React.FC<ProfileProps> = ({ user, loading, error }) => {
  if (error) {
    return (
      <div className="profile-container">
        <div className="error-state">
          <h2>Oops! Something went wrong</h2>
          <p>Error loading user data: {error}</p>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="profile-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="profile-container">
        <div className="no-data-state">
          <h2>No Profile Data</h2>
          <p>Unable to load profile information at this time.</p>
        </div>
      </div>
    );
  }

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
          alt={`${user.name.full} - Profile Picture`}
        />
      </a>
      <h1 className="profile-name">{user.name.full}</h1>
      <p className="profile-occupation">{user.occupation}</p>
      <p className="profile-location">
        {user.location.broad + ", "+ user.location.region}
      </p>
    </div>
  );
};

export default Profile;