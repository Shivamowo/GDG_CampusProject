import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="main-footer">
    © {new Date().getFullYear()} ZME. All rights reserved.
  </footer>
);

export default Footer;