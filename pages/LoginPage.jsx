import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../store/slices.js';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ id: 'user-1', name: email.split('@')[0] || 'User', email }));
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto py-20 animate-in">
      <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50">
        <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tighter">Welcome back.</h1>
        <p className="text-gray-400 font-medium mb-12">Sign in to your dashboard to manage stories.</p>
        
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
              placeholder="alex@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Password</label>
            <input 
              type="password" 
              required
              className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest shadow-2xl shadow-indigo-100 hover:bg-indigo-700 transition-all">
            Sign In
          </button>
        </form>
        
        <p className="mt-12 text-center text-sm font-bold text-gray-400">
          New here? <Link to="/register" className="text-indigo-600 hover:underline">Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;