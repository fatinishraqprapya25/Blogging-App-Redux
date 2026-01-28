
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const StatsCard: React.FC<{ label: string, value: string | number, trend: string, icon: React.ReactNode }> = ({ label, value, trend, icon }) => (
  <div className="bg-white p-6 rounded-xl border shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
        {icon}
      </div>
      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${trend.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
        {trend}
      </span>
    </div>
    <p className="text-sm text-slate-500 font-medium mb-1">{label}</p>
    <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
  </div>
);

const Overview: React.FC = () => {
  const { blogs } = useSelector((state: RootState) => state.blogs);
  const totalViews = blogs.reduce((acc, curr) => acc + curr.views, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Welcome back, Alex!</h1>
        <p className="text-slate-500">Here's what's happening with your blogs this month.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          label="Total Blogs" 
          value={blogs.length} 
          trend="+12%" 
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
        />
        <StatsCard 
          label="Total Views" 
          value={totalViews.toLocaleString()} 
          trend="+4.3%" 
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
        />
        <StatsCard 
          label="Drafts" 
          value="3" 
          trend="-2%" 
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
        />
        <StatsCard 
          label="Subscribers" 
          value="1,429" 
          trend="+18%" 
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border shadow-sm min-h-[300px] flex flex-col">
          <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
          <div className="space-y-6 flex-grow">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2"></div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">New subscriber joined</p>
                  <p className="text-xs text-slate-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm min-h-[300px]">
           <h3 className="text-lg font-bold mb-6">Top Performing Blogs</h3>
           <div className="space-y-4">
             {blogs.slice(0, 3).map(blog => (
               <div key={blog.id} className="flex items-center justify-between group cursor-pointer p-2 rounded-lg hover:bg-slate-50">
                 <div className="flex items-center gap-3">
                    <img src={blog.image} className="w-12 h-12 rounded object-cover" />
                    <div className="max-w-[180px]">
                      <p className="text-sm font-semibold text-slate-800 truncate">{blog.title}</p>
                      <p className="text-xs text-slate-500">{blog.views} views</p>
                    </div>
                 </div>
                 <div className="text-indigo-600 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">View Details</div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
