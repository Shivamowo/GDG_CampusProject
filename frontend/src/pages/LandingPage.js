import React from 'react';
import './LandingPage.css';
import { GoogleLogin } from '@react-oauth/google';

function LandingPage() {
  const handleGoogleSuccess = (credentialResponse) => {
    // You get credentialResponse.credential (JWT)
    // Send it to your backend for verification or use it for login
    console.log('Google sign up success:', credentialResponse);
  };

  const handleGoogleError = () => {
    console.log('Google sign up failed');
  };

  return (
    <div className="hero-container">
      <div className="hero-card">
        <h1>Empower Your Journey.<br />Achieve More, Together.</h1>
        <p>
          ZME helps you plan, learn, and grow with supportive mentors, smart tools, and a vibrant community.<br />
          Start your path to success in a space designed for you.
        </p>
        <div className="hero-actions">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            text="signup_with"
            shape="rectangular"
            theme="outline"
            size="large"
          />
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