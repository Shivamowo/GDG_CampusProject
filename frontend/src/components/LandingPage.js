import React from 'react';
import './LandingPage.css'; // We'll create this CSS file next

function LandingPage() {
  return (

    <div className="landing-page">
      <section className="hero-section">
        <h1>From Zero to Internships — Let AI be your guide</h1>
        <p>Many students struggle to find opportunities. ZME empowers you with the tools and guidance you need.</p>
        <button className="cta-button">Start Now</button>
      </section>

      <section className="process-section">
        <h2>Our 3-Step Process</h2>
        <div className="process-cards">
          <div className="process-card">
            <h3>Train</h3>
            <p>Train in real-world job readiness skills.</p>
          </div>
          <div className="process-card">
            <h3>Build</h3>
            <p>Auto-generate personalized CVs, SOPs, and cover letters.</p>
          </div>
          <div className="process-card">
            <h3>Apply</h3>
            <p>Get matched with real internships based on your profile.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Students Say</h2>
        {/* Placeholder for testimonials */}
        <div className="testimonial-card">
          <p>"ZME helped me land my first internship!"</p>
          <p>- Happy Student</p>
        </div>
      </section>

      <section className="cta-bottom">
        <h2>Ready to begin your journey?</h2>
        <button className="cta-button">Login</button>
      </section>
    </div>
  );
}

export default LandingPage;