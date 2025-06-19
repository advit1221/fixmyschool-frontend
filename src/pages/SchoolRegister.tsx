import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SchoolRegister() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://fixmyschool-api.onrender.com/api/schools/register', form);
      localStorage.setItem('schoolToken', res.data.token);
      navigate('/school-dashboard');
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register Your School</h2>
        <input type="text" name="name" placeholder="School Name" value={form.name} onChange={handleChange}
          className="w-full mb-4 p-3 border rounded" required />
        <input type="email" name="email" placeholder="School Email" value={form.email} onChange={handleChange}
          className="w-full mb-4 p-3 border rounded" required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange}
          className="w-full mb-4 p-3 border rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
          Register
        </button>
      </form>
    </div>
  );
}
