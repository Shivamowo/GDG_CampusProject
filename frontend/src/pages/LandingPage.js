import React from 'react';
import './LandingPage.css';

const LandingPage = () => (
  <div className="landing-page butter-style soft">
    <header className="butter-header">
      <div className="logo">ZME</div>
      <nav>
        <a href="#features">Features</a>
        <a href="#usecases">Use Cases</a>
        <a href="#templates">Templates</a>
        <a href="#pricing">Pricing</a>
        <a href="#resources">Resources</a>
        <a href="#download">Download</a>
      </nav>
      <div className="header-actions">
        <button className="link">Sign in</button>
        <button className="primary">Sign up for free</button>
      </div>
    </header>
    <main className="butter-hero">
      <h1>Empower Your Journey.<br/>Achieve More, Together.</h1>
      <p className="subtitle">ZME helps you plan, learn, and grow with supportive mentors, smart tools, and a vibrant community. Start your path to success in a space designed for you.</p>
      <div className="cta-row">
        <button className="google-signin">Sign up with Google</button>
        <button className="secondary">Sign up for free</button>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Community" className="soft-img" />
        <div className="mockup-video soft-mockup">
          <span className="play-btn">▶</span> Take a 2 min. tour
        </div>
      </div>
    </main>
  </div>
);

export default LandingPage;
