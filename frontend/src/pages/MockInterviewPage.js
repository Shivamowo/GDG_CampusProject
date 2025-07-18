import React from 'react';
import './MockInterviewPage.css';

function MockInterviewPage() {
  return (
    <div className="page-container">
      <div className="page-title">Mock Interview Practice</div>
      <p>Prepare for your interviews with our curated questions and feedback.</p>
      <div className="section-title">Interview Questions</div>
      <ul style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
        <li>Tell me about yourself.</li>
        <li>What are your strengths and weaknesses?</li>
        <li>Why do you want to work here?</li>
        <li>Describe a challenge you faced and how you overcame it.</li>
        <li>Where do you see yourself in five years?</li>
      </ul>
      <div className="section-title">Your Feedback</div>
      <textarea placeholder="Enter your thoughts and feedback here..." rows={3}></textarea>
      <button className="btn">Submit Feedback</button>
      <div className="page-footer">© 2025 ZME. All rights reserved.</div>
    </div>
  );
}

export default MockInterviewPage;