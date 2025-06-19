
import React from 'react';
import { School, Shield, Mail, Instagram, Phone, FileText, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Tagline */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <School className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">FixMySchool</span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            Empowering students with a safe voice to help Indian schools improve through anonymous feedback and actionable insights.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* For Students */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-400">For Students</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/submit-feedback" className="hover:text-white transition-colors flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Submit Anonymous Feedback
              </Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy & Safety</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Help Center (FAQs)</Link></li>
            </ul>
          </div>

          {/* For Schools */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-green-400">For Schools</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/for-schools" className="hover:text-white transition-colors">Dashboard Preview</Link></li>
              <li><Link to="/school-login" className="hover:text-white transition-colors">School Login</Link></li>
              <li><Link to="/for-schools#demo" className="hover:text-white transition-colors">Request Demo</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Meet Our Founder</Link></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-purple-400">Support & Contact</h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:advitdixit07@gmail.com" className="hover:text-white transition-colors">
                  advitdixit07@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a href="https://instagram.com/advit_dxt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @advit_dxt
                </a>
              </div>
              <Link to="/contact" className="hover:text-white transition-colors block">Contact Form →</Link>
            </div>
          </div>
        </div>

        {/* Legal & Help Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 border-t border-gray-800 pt-12">
          {/* Privacy Policy */}
          <div>
            <h5 className="font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Privacy Policy
            </h5>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Our Privacy Policy ensures that every submission is fully anonymous, secure, and never tracked. 
              We do not collect names, phone numbers, or IP addresses from students. All feedback is voluntary 
              and encrypted end-to-end.
            </p>
            <ul className="text-xs text-gray-400 space-y-1 mb-4">
              <li>• We comply with Indian data protection norms</li>
              <li>• Students can report issues safely without fear of identification</li>
              <li>• Data shared with schools is aggregated and anonymized</li>
            </ul>
            <Link to="/privacy" className="text-blue-400 hover:text-blue-300 text-sm">
              📎 View full Privacy Policy →
            </Link>
          </div>

          {/* Terms of Use */}
          <div>
            <h5 className="font-semibold text-green-400 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Terms of Use
            </h5>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              These Terms explain how FixMySchool should be used responsibly by both students and schools. 
              The platform is meant for constructive change, not punishment or blame.
            </p>
            <ul className="text-xs text-gray-400 space-y-1 mb-4">
              <li>• Students must not misuse the platform for false claims</li>
              <li>• Schools must respect the anonymous nature of submissions</li>
              <li>• We moderate offensive or abusive content</li>
            </ul>
            <a href="#terms-of-use" className="text-green-400 hover:text-green-300 text-sm">
              📎 View full Terms of Use →
            </a>
          </div>
        </div>

        {/* Help Center FAQs */}
        <div className="mb-12 bg-gray-800 rounded-lg p-6">
          <h5 className="font-semibold text-purple-400 mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            Help Center (FAQs)
          </h5>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h6 className="font-medium text-white mb-2">💬 "Can I report anonymously?"</h6>
                <p className="text-sm text-gray-300">
                  Yes! We do not ask for your name, school ID, or contact info. You can leave feedback 
                  safely anytime — even at night or on weekends.
                </p>
              </div>
              <div>
                <h6 className="font-medium text-white mb-2">🧾 "What issues can I report?"</h6>
                <p className="text-sm text-gray-300 mb-2">You can report anything that affects your school life:</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Dirty or unsafe washrooms 🚽</li>
                  <li>• Harassment or bullying 🙅</li>
                  <li>• Lack of facilities (labs, library, dance/music room) 🧪🎶</li>
                  <li>• Teacher behavior or teaching quality 👨‍🏫</li>
                  <li>• Safety or discrimination 🚨</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h6 className="font-medium text-white mb-2">📊 "What does the dashboard show schools?"</h6>
                <p className="text-sm text-gray-300 mb-2">Only anonymous summaries like:</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• "4 students reported hygiene issues in May"</li>
                  <li>• "3 feedbacks about teacher behavior in Class 9"</li>
                </ul>
                <p className="text-xs text-gray-400 mt-2">No names. No direct student identity. Just patterns for school leaders to act on.</p>
              </div>
              <div>
                <h6 className="font-medium text-white mb-2">🛑 "Can a school find out who submitted feedback?"</h6>
                <p className="text-sm text-gray-300">
                  Absolutely not. Even we cannot identify you. Everything is encrypted, and data is 
                  shared in a way that protects students fully.
                </p>
              </div>
              <div>
                <h6 className="font-medium text-white mb-2">🧠 "Who is behind this platform?"</h6>
                <p className="text-sm text-gray-300">
                  FixMySchool is founded by a 15-year-old student from Delhi, aiming to bring change 
                  through tech and empathy, not profit. <Link to="/about" className="text-blue-400 hover:text-blue-300">Learn more →</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>&copy; 2025 FixMySchool. All rights reserved.</p>
              <p className="mt-1">Compliant with Indian data protection standards.</p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>End-to-End Encrypted</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% Anonymous</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>India Privacy Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
