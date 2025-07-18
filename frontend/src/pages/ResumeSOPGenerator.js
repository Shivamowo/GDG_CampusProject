import React, { useState } from 'react';
import './ResumeSOPGenerator.css';

const ResumeSOPGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
    sop: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to generate resume and SOP
    console.log('Generated Data:', formData);
  };

  return (
    <div className="page-container">
      <div className="page-title">Resume and SOP Generator</div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input className="input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />

        <label>Email:</label>
        <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />

        <label>Phone:</label>
        <input className="input" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone" required />

        <label>Education:</label>
        <textarea className="input" name="education" value={formData.education} onChange={handleChange} rows={2} placeholder="Your education" required />

        <label>Experience:</label>
        <textarea className="input" name="experience" value={formData.experience} onChange={handleChange} rows={2} placeholder="Your experience" required />

        <label>Skills:</label>
        <textarea className="input" name="skills" value={formData.skills} onChange={handleChange} rows={2} placeholder="Your skills" required />

        <label>Statement of Purpose:</label>
        <textarea className="input" name="sop" value={formData.sop} onChange={handleChange} rows={3} placeholder="Your SOP" required />

        <button className="btn" type="submit">Generate</button>
      </form>
      <div className="page-footer">© 2025 ZME. All rights reserved.</div>
    </div>
  );
};

export default ResumeSOPGenerator;