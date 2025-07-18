import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="hero-container">
      <div className="hero-card">
        <h1>Empower Your Journey.<br />Achieve More, Together.</h1>
        <p>
          ZME helps you plan, learn, and grow with supportive mentors, smart tools, and a vibrant community.<br />
          Start your path to success in a space designed for you.
        </p>
        <div className="hero-actions">
          <button className="btn google">Sign up with Google</button>
          <button className="btn primary">Sign up for free</button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Journey"
          className="hero-img"
        />
      </div>
    </div>
  );
}

export default LandingPage;