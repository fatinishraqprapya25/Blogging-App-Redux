import React from 'react';

const DashboardAnalytics = () => {
  return (
    <div className="animate-in">
      <header className="mb-12">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Global Analytics</h1>
        <p className="text-gray-400 mt-2 font-medium">Understand your audience behavior through real-time data.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col justify-between min-h-[450px]">
          <div>
            <h3 className="text-lg font-black text-gray-900 mb-2">Audience Location</h3>
            <p className="text-sm font-medium text-gray-400">Peak performance across regions.</p>
          </div>
          <div className="flex-grow flex items-center justify-center">
             <div className="relative w-48 h-48 rounded-full border-[20px] border-indigo-600 border-t-indigo-50 border-r-indigo-200">
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-2xl font-black text-indigo-600 tracking-tighter">74%</span>
               </div>
             </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <span className="block text-[10px] font-black text-gray-400 uppercase mb-1">USA</span>
              <span className="block font-bold text-gray-900 text-sm">45%</span>
            </div>
            <div className="text-center">
              <span className="block text-[10px] font-black text-gray-400 uppercase mb-1">India</span>
              <span className="block font-bold text-gray-900 text-sm">22%</span>
            </div>
            <div className="text-center">
              <span className="block text-[10px] font-black text-gray-400 uppercase mb-1">Germany</span>
              <span className="block font-bold text-gray-900 text-sm">14%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col min-h-[450px]">
          <h3 className="text-lg font-black text-gray-900 mb-10">Monthly Engagement</h3>
          <div className="flex-grow flex items-end gap-3 pb-6">
            {[40, 60, 45, 90, 75, 85, 100].map((h, i) => (
              <div key={i} className="flex-grow bg-indigo-600 rounded-2xl relative group transition-all" style={{ height: `${h}%` }}>
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                   {h}K
                 </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between px-2 text-[10px] font-black text-gray-300 uppercase tracking-widest">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalytics;