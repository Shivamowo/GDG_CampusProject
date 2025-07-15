import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Placeholder Components (will be replaced with actual components later)
const LandingPage = () => <div>Landing Page</div>;
const AuthPages = () => <div>Auth Pages</div>;
const StudentDashboard = () => <div>Student Dashboard</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPages />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
