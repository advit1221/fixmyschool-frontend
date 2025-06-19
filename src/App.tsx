import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import SubmitFeedback from "./pages/SubmitFeedback";
import HowItWorksPage from "./pages/HowItWorks";
import ForSchools from "./pages/ForSchools";
import About from "./pages/About";
import Blog from "./pages/Blog";
import SchoolLogin from "./pages/SchoolLogin";
import SchoolDashboard from "./pages/SchoolDashboard";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

import Login from "./pages/Login";
import Register from "./pages/Register";
import SubmitIssue from "./pages/SubmitIssue";
import MyIssues from "./pages/MyIssues";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/submit-feedback" element={<SubmitFeedback />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/for-schools" element={<ForSchools />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/school-login" element={<SchoolLogin />} />
            <Route path="/school-dashboard" element={<SchoolDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/submit" element={<SubmitIssue />} />
            <Route path="/my-issues" element={<MyIssues />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Sonner />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
<Route path="/register-school" element={<SchoolRegister />} />
<Route path="/school-login" element={<SchoolLogin />} />
<Route path="/school-dashboard" element={<SchoolDashboard />} />
<Route path="/feedback" element={<FeedbackPublic />} />
<Link to="/feedback">Student Feedback</Link>
<Link to="/school-login">School Login</Link>
