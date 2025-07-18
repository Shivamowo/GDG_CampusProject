import React from 'react';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <div className="page-container">
      <div className="page-title">Your Profile</div>
      <div className="section-title">Personal Information</div>
      <form>
        <input className="input" type="text" placeholder="Name" />
        <input className="input" type="email" placeholder="Email" />
        <textarea className="input" rows={2} placeholder="Bio"></textarea>
        <button className="btn" type="submit">Save Changes</button>
      </form>
      <div className="section-title">Your Activity</div>
      <ul style={{ textAlign: 'left' }}>
        <li>Completed Mock Interview</li>
        <li>Submitted Resume for Review</li>
        <li>Joined Mentor Connect Session</li>
      </ul>
      <div className="page-footer">© 2025 ZME. All rights reserved.</div>
    </div>
  );
}

export default ProfilePage;