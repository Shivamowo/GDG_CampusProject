import React from 'react';

const AuthPages = () => (
  <div className="auth-page">
    <h2>Login / Sign Up</h2>
    <p>Choose your role to get started:</p>
    <button>Student</button>
    <button>Mentor</button>
    {/* Add Firebase Auth integration here */}
  </div>
);

export default AuthPages;
