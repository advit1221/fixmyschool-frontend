import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ForSchools from "./pages/ForSchools"
import HowItWorks from "./pages/HowItWorks"
import Privacy from "./pages/Privacy"
import NotFound from "./pages/NotFound"
import SubmitIssue from "./pages/SubmitIssue"
import SubmitFeedback from "./pages/SubmitFeedback"
import MyIssues from "./pages/MyIssues"
import AdminDashboard from "./pages/AdminDashboard"
import SchoolDashboard from "./pages/SchoolDashboard"
import SchoolLogin from "./pages/SchoolLogin"
import SchoolRegister from "./pages/SchoolRegister"
import FeedbackPublic from "./pages/FeedbackPublic"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/for-schools" element={<ForSchools />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/submit-issue" element={<SubmitIssue />} />
        <Route path="/submit-feedback" element={<SubmitFeedback />} />
        <Route path="/my-issues" element={<MyIssues />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/school-dashboard" element={<SchoolDashboard />} />
        <Route path="/school-login" element={<SchoolLogin />} />
        <Route path="/register-school" element={<SchoolRegister />} />
        <Route path="/feedback" element={<FeedbackPublic />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
