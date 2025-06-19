
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'issues', label: 'Issues' },
    { id: 'trends', label: 'Trends' }
  ];

  return (
    <section id="dashboard-preview" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Insights for Schools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform anonymous student feedback into actionable insights with our comprehensive dashboard designed for Indian schools.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-lg">
          {/* Dashboard Header */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Delhi Public School Dashboard</h3>
                <p className="text-gray-600">Last updated: Today, 2:30 PM</p>
              </div>
              <div className="flex gap-4 text-sm">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  <span className="font-medium">127</span> Total Feedback
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  <span className="font-medium">23</span> This Week
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 bg-white rounded-lg p-2 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-3 gap-6">
                {/* Issue Categories */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">Top Issues</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cleanliness</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-12 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">34</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Teaching Quality</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-10 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">28</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Bullying</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-6 h-2 bg-red-600 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">15</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">This Month</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-600">Response Rate</span>
                        <span className="font-medium text-green-600">+12%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="w-4/5 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-600">Urgent Issues</span>
                        <span className="font-medium text-red-600">3</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="w-1/6 h-2 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Items */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">Recommended Actions</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-gray-900 font-medium">Improve toilet cleanliness</p>
                        <p className="text-xs text-gray-600">34 complaints this week</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-gray-900 font-medium">Review Math department</p>
                        <p className="text-xs text-gray-600">Multiple teaching concerns</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-gray-900 font-medium">Address bullying in Grade 8</p>
                        <p className="text-xs text-gray-600">Requires immediate attention</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'issues' && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">Recent Issues</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">Cleanliness Issue</p>
                        <p className="text-gray-600 text-sm">"The washrooms are not clean and smell bad..."</p>
                        <p className="text-xs text-gray-500 mt-1">Category: Hygiene • Grade: 9-10 • Today, 1:45 PM</p>
                      </div>
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">High Priority</span>
                    </div>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">Teaching Concern</p>
                        <p className="text-gray-600 text-sm">"Math teacher explains too fast and doesn't help..."</p>
                        <p className="text-xs text-gray-500 mt-1">Category: Academics • Grade: 7-8 • Yesterday, 3:20 PM</p>
                      </div>
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Medium Priority</span>
                    </div>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">Facility Request</p>
                        <p className="text-gray-600 text-sm">"Can we have more books in the library..."</p>
                        <p className="text-xs text-gray-500 mt-1">Category: Infrastructure • Grade: 11-12 • 2 days ago</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Low Priority</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'trends' && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">Feedback Trends</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-3">Issues Over Time</h5>
                    <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">[Chart: Feedback volume by week]</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-3">Category Distribution</h5>
                    <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">[Chart: Issues by category]</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to transform your school with data-driven insights?
          </p>
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book a Demo for Your School
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
