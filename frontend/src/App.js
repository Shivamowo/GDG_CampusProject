import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import MentorConnectPage from './pages/MentorConnectPage';
import InternshipMatchPage from './pages/InternshipMatchPage';
import MockInterviewPage from './pages/MockInterviewPage';
import ProgressTrackerPage from './pages/ProgressTrackerPage';
import ResumeSOPGenerator from './pages/ResumeSOPGenerator';
import './styles/main.css';
import './styles/wireframe.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/mentor-connect" element={<MentorConnectPage />} />
        <Route path="/internship-match" element={<InternshipMatchPage />} />
        <Route path="/mock-interview" element={<MockInterviewPage />} />
        <Route path="/progress-tracker" element={<ProgressTrackerPage />} />
        <Route path="/resume-sop-generator" element={<ResumeSOPGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;