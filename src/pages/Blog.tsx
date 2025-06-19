
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Importance of Anonymous Feedback in Indian Schools",
    excerpt: "Exploring how anonymous feedback systems can transform the educational landscape by giving students a safe voice to share their experiences.",
    category: "Research",
    readTime: "8 min read",
    image: "📚"
  };

  const blogPosts = [
    {
      title: "Creating Safe Spaces: Why Student Anonymity Matters",
      excerpt: "Understanding the psychology behind anonymous reporting and how it encourages honest feedback from students.",
      category: "Research",
      readTime: "6 min read",
      image: "🔒"
    },
    {
      title: "From Silence to Action: Student Stories of Change",
      excerpt: "Real examples of how anonymous feedback has led to positive changes in school environments across India.",
      category: "Stories",
      readTime: "5 min read",
      image: "⭐"
    },
    {
      title: "Building Better Schools: A Practical Guide for Administrators",
      excerpt: "Step-by-step strategies for school administrators to create more inclusive and responsive educational environments.",
      category: "Practical Guides",
      readTime: "7 min read",
      image: "🏫"
    },
    {
      title: "Mental Health in Schools: Breaking the Stigma",
      excerpt: "How anonymous platforms can help address mental health concerns among students in Indian educational institutions.",
      category: "Research",
      readTime: "9 min read",
      image: "🧠"
    },
    {
      title: "Technology for Good: The Role of EdTech in Student Welfare",
      excerpt: "Examining how technology platforms can be designed to prioritize student safety and wellbeing.",
      category: "Stories",
      readTime: "4 min read",
      image: "💻"
    },
    {
      title: "Implementing Change: A School Administrator's Toolkit",
      excerpt: "Practical resources and strategies for educators looking to improve their school culture through student feedback.",
      category: "Practical Guides",
      readTime: "6 min read",
      image: "🛠️"
    }
  ];

  const categories = [
    "All Posts",
    "Research",
    "Stories",
    "Practical Guides"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-12 h-12 text-indigo-600" />
            <span className="text-indigo-600 font-semibold text-lg">FixMySchool Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insights on Student Voice &
            <span className="text-indigo-600"> School Improvement</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research, stories, and practical guidance on creating better educational environments 
            through anonymous feedback and student empowerment.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-indigo-100 text-sm">Featured Post</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-indigo-100 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-indigo-100">
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button className="bg-white text-indigo-600 hover:bg-gray-100">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">{featuredPost.image}</div>
                <div className="text-indigo-100 text-sm">Featured Article</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-indigo-600 hover:bg-indigo-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="text-4xl mb-4 text-center">{post.image}</div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated on School Innovation
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest insights on student welfare, educational technology, and school improvement 
            delivered to your inbox monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
