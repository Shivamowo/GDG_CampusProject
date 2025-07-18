import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="main-header">
    <div className="logo">ZME</div>
    <nav className="main-nav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/mentor-connect">Mentor Connect</NavLink>
      <NavLink to="/internship-match">Internship Match</NavLink>
      <NavLink to="/mock-interview">Mock Interview</NavLink>
      <NavLink to="/progress-tracker">Progress Tracker</NavLink>
      <NavLink to="/resume-sop-generator">Resume/SOP Generator</NavLink>
    </nav>
  </header>
);

export default Header;