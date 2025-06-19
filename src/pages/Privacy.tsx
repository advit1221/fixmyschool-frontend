
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Globe, FileText, AlertCircle } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-12 h-12 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Privacy is Our Priority
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              FixMySchool is committed to protecting the privacy and anonymity of students who use our platform. 
              This Privacy Policy explains how we collect, use, and protect information when you use our anonymous 
              feedback system.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-800 font-medium">
                <strong>Key Principle:</strong> We are designed to be anonymous by default. We cannot and do not track individual users.
              </p>
            </div>
          </div>

          {/* What We Don't Collect */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Eye className="w-6 h-6 text-red-600" />
              What We DON'T Collect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-red-900 mb-3">Personal Information</h3>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• Your name or identity</li>
                  <li>• Email addresses</li>
                  <li>• Phone numbers</li>
                  <li>• Student ID numbers</li>
                  <li>• Home addresses</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-red-900 mb-3">Technical Tracking</h3>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• IP addresses</li>
                  <li>• Device fingerprints</li>
                  <li>• Location data</li>
                  <li>• Browser cookies for tracking</li>
                  <li>• User accounts or profiles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Do Collect */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-green-600" />
              What We DO Collect (Anonymously)
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span><strong>Feedback content:</strong> The anonymous messages students submit</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span><strong>Category selection:</strong> The type of issue being reported</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span><strong>Optional grade level:</strong> Only if voluntarily provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span><strong>Optional school name:</strong> Only if voluntarily provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span><strong>Timestamp:</strong> When feedback was submitted (for trends)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Security */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Lock className="w-6 h-6 text-purple-600" />
              Technical Security Measures
            </h2>
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-purple-900 mb-3">End-to-End Encryption</h3>
                <p className="text-purple-800 text-sm">
                  All feedback is encrypted from your device to our servers. Even our technical team 
                  cannot read individual submissions in plain text.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-purple-900 mb-3">No Session Tracking</h3>
                <p className="text-purple-800 text-sm">
                  We don't use cookies or other methods to track users across visits. Each submission 
                  is treated as completely independent.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-purple-900 mb-3">Data Aggregation</h3>
                <p className="text-purple-800 text-sm">
                  Schools only see aggregated, anonymized summaries like "5 students reported cleanliness issues this month."
                </p>
              </div>
            </div>
          </div>

          {/* Indian Compliance */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-orange-600" />
              Indian Privacy Standards
            </h2>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <p className="text-orange-800 mb-4">
                FixMySchool complies with Indian data protection standards and goes beyond them to protect student privacy:
              </p>
              <ul className="space-y-2 text-orange-800 text-sm">
                <li>• Follows Digital Personal Data Protection Act, 2023 principles</li>
                <li>• Implements "privacy by design" architecture</li>
                <li>• Provides additional protections for minors</li>
                <li>• Stores data within Indian jurisdiction when possible</li>
                <li>• Regular security audits and updates</li>
              </ul>
            </div>
          </div>

          {/* School Access */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Schools See</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-green-900 mb-3">✅ Schools CAN See</h3>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Aggregated category counts</li>
                  <li>• General grade-level trends</li>
                  <li>• Time-based patterns</li>
                  <li>• Anonymous message content</li>
                  <li>• Overall sentiment trends</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-red-900 mb-3">❌ Schools CANNOT See</h3>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• Individual student identities</li>
                  <li>• Which student wrote what</li>
                  <li>• Connection between submissions</li>
                  <li>• Technical identifying information</li>
                  <li>• Time stamps linking to individuals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rights and Controls */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span><strong>Right to Anonymity:</strong> Your identity is protected by design</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span><strong>No Account Deletion Needed:</strong> Since we don't store personal accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span><strong>Contact Us:</strong> For any privacy concerns at advitdixit07@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              Questions About Privacy?
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> advitdixit07@gmail.com</p>
                <p><strong>Subject:</strong> Privacy Policy Question</p>
                <p><strong>Response Time:</strong> Within 48 hours</p>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-yellow-900 mb-3">Policy Updates</h3>
            <p className="text-yellow-800 text-sm">
              We may update this Privacy Policy occasionally. Any changes will be posted on this page with 
              an updated "Last modified" date. We recommend checking this page periodically for any updates.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
