
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import AnonymousReviews from '../components/AnonymousReviews';
import TrustPrivacy from '../components/TrustPrivacy';
import DashboardPreview from '../components/DashboardPreview';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <HowItWorks />
      <AnonymousReviews />
      <TrustPrivacy />
      <DashboardPreview />
      <Footer />
    </div>
  );
};

export default Index;
