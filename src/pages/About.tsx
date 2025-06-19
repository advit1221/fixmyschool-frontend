
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Users, Shield, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "100%", label: "Anonymous & Secure", icon: Shield },
    { number: "24/7", label: "Platform Availability", icon: Globe },
    { number: "0", label: "Login Required", icon: Users },
    { number: "Free", label: "For All Schools", icon: Award }
  ];

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "We believe every student deserves a safe space to share their thoughts without fear of identification or retaliation."
    },
    {
      icon: Heart,
      title: "Student Wellbeing",
      description: "Our mission is to improve the mental health and overall experience of students in Indian schools."
    },
    {
      icon: Users,
      title: "Collaborative Change",
      description: "We bring students and schools together to create positive change through open, honest communication."
    },
    {
      icon: Target,
      title: "Data-Driven Impact",
      description: "We believe in the power of data to drive meaningful improvements in educational environments."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Better Schools Through
            <span className="text-purple-600"> Student Voice</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FixMySchool was born from a simple belief: when students have a safe way to share their experiences, 
            schools can create environments where everyone thrives.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're on a mission to transform the Indian education system by giving every student a voice 
                and every school the insights they need to improve.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2025, FixMySchool addresses the unique challenges faced by Indian schools - 
                from overcrowded classrooms to mental health concerns that often go unheard.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Join Our Mission
              </Button>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
              <div className="text-6xl mb-4 text-center">🏫</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                The Problem We're Solving
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Students afraid to speak up about serious issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Schools lacking real feedback from their students</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Issues like bullying and harassment going unreported</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span>Limited mental health support systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Currently Offer
            </h2>
            <p className="text-lg text-gray-600">
              Our platform provides essential tools for student voice and school improvement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Founder
            </h2>
            <p className="text-lg text-gray-600">
              The young visionary behind FixMySchool
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-8xl mb-6">👨‍💻</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Advit Dixit
              </h3>
              <div className="text-purple-600 font-medium mb-2">
                Age: 15 • Delhi, India
              </div>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-6 inline-block">
                Teen Founder
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A teen founder building FixMySchool to empower student voices in India. 
                Passionate about education, social impact, and tech for good.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-purple-50 px-4 py-2 rounded-full">
                  <span className="text-purple-700">🎓 Student Advocate</span>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-blue-700">💻 Tech Enthusiast</span>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-full">
                  <span className="text-green-700">🌱 Social Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Whether you're a student with something to share or a school looking to improve, 
            we're here to help create positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              Submit Feedback
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
              Request School Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
