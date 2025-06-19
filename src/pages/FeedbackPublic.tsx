import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FeedbackPublic() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('https://fixmyschool-api.onrender.com/api/feedbacks/public')
      .then(res => setFeedbacks(res.data))
      .catch(() => alert('Error loading feedback'));
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Student Feedback Wall</h1>
      <div className="grid gap-4 max-w-3xl mx-auto">
        {feedbacks.map((fb: any, i) => (
          <div key={i} className="border p-4 rounded shadow hover:shadow-md transition">
            <p className="text-gray-800">\"{fb.content}\"</p>
            <p className="text-sm text-yellow-600">⭐ {fb.rating} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
}
