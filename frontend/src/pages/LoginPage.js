import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back!</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter your password" required />

          <button type="submit" className="login-btn">Log In</button>
        </form>
        <div className="login-links">
          <span>Don't have an account? <a href="#">Sign up</a></span>
          <a href="#" className="forgot-link">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;