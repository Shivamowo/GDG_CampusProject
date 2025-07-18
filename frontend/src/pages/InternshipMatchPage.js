import React from 'react';
import './InternshipMatchPage.css';

function InternshipMatchPage() {
  return (
    <div className="page-container">
      <div className="page-title">Find Your Perfect Internship</div>
      <p>Match with opportunities that align with your skills and interests.</p>
      <div className="section-title">Search Internships</div>
      <form style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input className="input" type="text" placeholder="Search by role, company, or location" />
        <button className="btn" type="submit">Search</button>
      </form>
      <div className="section-title">Available Internships</div>
      <ul style={{ textAlign: 'left' }}>
        <li>
          <strong>Software Engineering Intern</strong>
          <div>Company: Tech Innovations</div>
          <div>Location: Remote</div>
          <button className="btn">Apply Now</button>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <strong>Marketing Intern</strong>
          <div>Company: Creative Solutions</div>
          <div>Location: New York, NY</div>
          <button className="btn">Apply Now</button>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <strong>Data Science Intern</strong>
          <div>Company: Data Insights</div>
          <div>Location: San Francisco, CA</div>
          <button className="btn">Apply Now</button>
        </li>
      </ul>
      <div className="page-footer">© 2025 ZME. All rights reserved.</div>
    </div>
  );
}

export default InternshipMatchPage;