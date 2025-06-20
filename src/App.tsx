import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SubmitFeedback from "./pages/SubmitFeedback";
import SchoolLogin from "./pages/SchoolLogin";
import SchoolRegister from "./pages/SchoolRegister";
import SchoolDashboard from "./pages/SchoolDashboard";
import FeedbackPublic from "./pages/FeedbackPublic";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/submit-feedback" element={<SubmitFeedback />} />
        <Route path="/school-login" element={<SchoolLogin />} />
        <Route path="/register-school" element={<SchoolRegister />} />
        <Route path="/school-dashboard" element={<SchoolDashboard />} />
        <Route path="/feedback" element={<FeedbackPublic />} />
      </Routes>
    </Router>
  );
}

export default App;
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
