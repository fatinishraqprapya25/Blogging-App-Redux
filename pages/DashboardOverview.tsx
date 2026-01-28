import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const DashboardOverview: React.FC = () => {
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.user);

  return (
    <div className="animate-in space-y-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Overview</h1>
          <p className="text-gray-400 mt-2 font-medium">
            {isAuthenticated ? `Welcome back, ${currentUser?.name}. Here's what's happening today.` : 'A public look at our platform metrics.'}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-8 py-5 rounded-[2rem] border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Views</p>
            <p className="text-2xl font-black text-gray-900">48.2K</p>
          </div>
          <div className="bg-indigo-600 px-8 py-5 rounded-[2rem] shadow-2xl shadow-indigo-100 text-white">
            <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-1">Live Posts</p>
            <p className="text-2xl font-black">{blogs.length}</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm group hover:border-indigo-100 transition-all">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Daily Growth</h3>
          <p className="text-4xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors">+12%</p>
          <div className="mt-6 flex gap-1 h-1.5">
            <div className="flex-1 bg-indigo-600 rounded-full"></div>
            <div className="flex-1 bg-indigo-200 rounded-full"></div>
            <div className="flex-1 bg-indigo-100 rounded-full"></div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm group hover:border-indigo-100 transition-all">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Active Readers</h3>
          <p className="text-4xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors">1.4K</p>
          <div className="mt-6 flex gap-1 h-1.5">
            <div className="flex-1 bg-green-500 rounded-full"></div>
            <div className="flex-1 bg-green-100 rounded-full"></div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm group hover:border-indigo-100 transition-all">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Ad Revenue</h3>
          <p className="text-4xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors">$840</p>
          <div className="mt-6 flex gap-1 h-1.5">
            <div className="flex-1 bg-orange-500 rounded-full"></div>
            <div className="flex-1 bg-orange-100 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl font-black mb-4 tracking-tight">Expand Your Audience.</h2>
          <p className="text-gray-400 mb-10 leading-relaxed font-medium">Use our new content delivery network to reach readers in over 120 countries with lightning-fast load times.</p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl">Activate CDN</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;