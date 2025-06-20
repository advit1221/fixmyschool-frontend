import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ForSchools from "./pages/ForSchools";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyIssues from "./pages/MyIssues";
import SubmitFeedback from "./pages/SubmitFeedback";
import SubmitIssue from "./pages/SubmitIssue";
import NotFound from "./pages/NotFound";
import SchoolRegister from "./pages/SchoolRegister";
import SchoolLogin from "./pages/SchoolLogin";
import SchoolDashboard from "./pages/SchoolDashboard";
import FeedbackPublic from "./pages/FeedbackPublic";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schools" element={<ForSchools />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-issues" element={<MyIssues />} />
        <Route path="/submit-feedback" element={<SubmitFeedback />} />
        <Route path="/submit-issue" element={<SubmitIssue />} />
        <Route path="/register-school" element={<SchoolRegister />} />
        <Route path="/school-login" element={<SchoolLogin />} />
        <Route path="/school-dashboard" element={<SchoolDashboard />} />
        <Route path="/feedback" element={<FeedbackPublic />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
