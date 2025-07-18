import React, { useContext } from 'react';
import './LandingPage.css';
import { GoogleLogin } from '@react-oauth/google';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const { profile, setProfile } = useContext(UserContext);
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await fetch('http://localhost:4000/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      });
      const data = await res.json();
      if (data.user) {
        setProfile(data.user);
        navigate('/profile'); // Redirect to personalized page
      } else {
        console.error('Profile creation failed:', data.error);
      }
    } catch (err) {
      console.error('Error connecting to backend:', err);
    }
  };

  const handleGoogleError = () => {
    console.log('Google sign up failed');
  };

  // If signed in, show personalized welcome
  if (profile) {
    return (
      <div className="personalized-app">
        <h2>Welcome, {profile.name}!</h2>
        <img src={profile.picture} alt="Profile" style={{ width: 80, borderRadius: '50%' }} />
        <p>Email: {profile.email}</p>
        {/* Add your personalized dashboard, navigation, etc. here */}
      </div>
    );
  }

  // Otherwise, show landing page
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