import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SubmitFeedback() {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [school, setSchool] = useState('');
  const [schools, setSchools] = useState<string[]>([]);

  useEffect(() => {
    // Fetch school list from backend
    axios
      .get('https://fixmyschool-api.onrender.com/api/schools')
      .then((res) => setSchools(res.data))
      .catch(() => setSchools([]));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://fixmyschool-api.onrender.com/api/feedbacks', {
        content,
        rating,
        school,
      });
      alert('✅ Feedback submitted successfully!');
      setContent('');
      setRating(5);
      setSchool('');
    } catch (err) {
      alert('❌ Failed to submit feedback');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Submit Feedback</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your feedback here..."
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="number"
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Rating (1-5)"
          required
        />
        <select
          required
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Select School</option>
          {schools.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
