import React from 'react';

const StudentDashboard = () => (
  <div className="dashboard">
    <h2>Hi Shivam, Ready to Level Up?</h2>
    <div className="widgets">
      <div>Resume Builder Status: ✅</div>
      <div>SOP Created: ❌</div>
      <div>Interviews Done: 1</div>
      <div>Suggested Internships</div>
      <div>Skill Progress Circle</div>
    </div>
    <div className="tabs">
      <button>Resume & SOP</button>
      <button>Internship Matches</button>
      <button>Mock Interview</button>
      <button>Mentor Connect</button>
      <button>Learning Hub</button>
    </div>
  </div>
);

export default StudentDashboard;
