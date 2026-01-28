
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../store/slices';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Login Handler
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ id: 'user-1', name: email.split('@')[0], email }));
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto py-20">
      <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Welcome back.</h1>
        <p className="text-gray-500 mb-8">Login to manage your stories and analytics.</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="alex@example.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase">Password</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all">
            Sign In
          </button>
        </form>
        
        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account? <Link to="/register" className="text-indigo-600 font-bold">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
