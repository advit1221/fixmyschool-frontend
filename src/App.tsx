// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SubmitFeedback from "./pages/SubmitFeedback";
import SchoolRegister from "./pages/SchoolRegister";
import SchoolLogin from "./pages/SchoolLogin";
import SchoolDashboard from "./pages/SchoolDashboard";
import FeedbackPublic from "./pages/FeedbackPublic";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submit-feedback" element={<SubmitFeedback />} />
        <Route path="/register-school" element={<SchoolRegister />} />
        <Route path="/school-login" element={<SchoolLogin />} />
        <Route path="/school-dashboard" element={<SchoolDashboard />} />
        <Route path="/feedback" element={<FeedbackPublic />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
