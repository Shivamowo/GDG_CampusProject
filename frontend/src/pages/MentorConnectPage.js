import React from 'react';
import './MentorConnectPage.css';

function MentorConnectPage() {
  return (
    <div className="page-container">
      <div className="page-title">Connect with a Mentor</div>
      <p>Find the right mentor to guide you on your journey.</p>
      <div className="section-title">Search for Mentors</div>
      <form style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input className="input" type="text" placeholder="Search by expertise or name" />
        <button className="btn" type="submit">Search</button>
      </form>
      <div className="section-title">Available Mentors</div>
      <ul style={{ textAlign: 'left' }}>
        <li>
          <strong>John Doe</strong>
          <div>Expert in Software Development</div>
          <button className="btn">Connect</button>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <strong>Jane Smith</strong>
          <div>Career Coach and Resume Expert</div>
          <button className="btn">Connect</button>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <strong>Emily Johnson</strong>
          <div>Marketing Specialist</div>
          <button className="btn">Connect</button>
        </li>
      </ul>
      <div className="page-footer">© 2025 ZME. All rights reserved.</div>
    </div>
  );
}

export default MentorConnectPage;