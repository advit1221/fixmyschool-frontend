import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Index';
import SubmitFeedback from './pages/SubmitFeedback';
import SchoolRegister from './pages/SchoolRegister';
import SchoolLogin from './pages/SchoolLogin';
import SchoolDashboard from './pages/SchoolDashboard';
import FeedbackPublic from './pages/FeedbackPublic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit-feedback" element={<SubmitFeedback />} />
        <Route path="/register-school" element={<SchoolRegister />} />
        <Route path="/school-login" element={<SchoolLogin />} />
        <Route path="/school-dashboard" element={<SchoolDashboard />} />
        <Route path="/feedback" element={<FeedbackPublic />} />
      </Routes>
    </Router>
  );
}

export default App;
