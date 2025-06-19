
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BarChart3, TrendingUp, AlertTriangle, Users, School, Calendar, Filter, Download, Eye } from 'lucide-react';

const SchoolDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');

  const mockData = {
    totalFeedback: 47,
    newThisWeek: 12,
    categories: [
      { name: 'Cleanliness', count: 15, trend: '+3', color: 'bg-blue-500' },
      { name: 'Teacher Behavior', count: 8, trend: '-2', color: 'bg-yellow-500' },
      { name: 'Bullying', count: 6, trend: '+1', color: 'bg-red-500' },
      { name: 'Infrastructure', count: 10, trend: '+4', color: 'bg-green-500' },
      { name: 'Food Quality', count: 5, trend: '0', color: 'bg-purple-500' },
      { name: 'Safety', count: 3, trend: '-1', color: 'bg-orange-500' }
    ],
    recentFeedback: [
      { id: 1, category: 'Cleanliness', grade: '9th Grade', time: '2 hours ago', priority: 'High' },
      { id: 2, category: 'Infrastructure', grade: '11th Grade', time: '5 hours ago', priority: 'Medium' },
      { id: 3, category: 'Teacher Behavior', grade: '8th Grade', time: '1 day ago', priority: 'High' },
      { id: 4, category: 'Food Quality', grade: '10th Grade', time: '2 days ago', priority: 'Low' },
      { id: 5, category: 'Safety', grade: '12th Grade', time: '3 days ago', priority: 'High' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">School Dashboard</h1>
              <p className="text-gray-600">Anonymous student feedback insights for your school</p>
            </div>
            <div className="flex items-center gap-4">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2"
              >
                <option>This Week</option>
                <option>This Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
              </select>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{mockData.totalFeedback}</div>
              <p className="text-sm text-green-600">+{mockData.newThisWeek} this week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Categories Reported</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{mockData.categories.length}</div>
              <p className="text-sm text-gray-500">Active areas</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Response Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">73%</div>
              <p className="text-sm text-green-600">+5% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Avg. Resolution Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">5.2 days</div>
              <p className="text-sm text-green-600">-1.3 days improved</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="recent">Recent Feedback</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Feedback by Category</CardTitle>
                  <CardDescription>Distribution of issues reported this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold">{category.count}</span>
                          <span className={`text-sm ${category.trend.startsWith('+') ? 'text-red-500' : category.trend.startsWith('-') ? 'text-green-500' : 'text-gray-500'}`}>
                            {category.trend}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Priority Distribution</CardTitle>
                  <CardDescription>Urgency levels of reported issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="font-medium">High Priority</span>
                      </div>
                      <span className="text-lg font-semibold">18</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span className="font-medium">Medium Priority</span>
                      </div>
                      <span className="text-lg font-semibold">22</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="font-medium">Low Priority</span>
                      </div>
                      <span className="text-lg font-semibold">7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {mockData.categories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {category.name}
                      <Badge variant="secondary">{category.count} reports</Badge>
                    </CardTitle>
                    <CardDescription>
                      Trend: <span className={category.trend.startsWith('+') ? 'text-red-500' : category.trend.startsWith('-') ? 'text-green-500' : 'text-gray-500'}>
                        {category.trend} from last month
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Feedback</CardTitle>
                <CardDescription>Latest anonymous submissions from students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.recentFeedback.map((feedback) => (
                    <div key={feedback.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Badge variant="outline">{feedback.category}</Badge>
                        <span className="text-sm text-gray-600">{feedback.grade}</span>
                        <span className="text-sm text-gray-500">{feedback.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={feedback.priority === 'High' ? 'destructive' : feedback.priority === 'Medium' ? 'default' : 'secondary'}>
                          {feedback.priority}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Trends</CardTitle>
                <CardDescription>Feedback patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Trend charts would be displayed here with actual data</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default SchoolDashboard;
