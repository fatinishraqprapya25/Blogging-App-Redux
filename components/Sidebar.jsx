import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Overview', path: '/dashboard', icon: 'M4 6h16M4 12h16M4 18h7' },
    { name: 'Manage Posts', path: '/dashboard/posts', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z' },
    { name: 'Analytics', path: '/dashboard/analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { name: 'Write New', path: '/author', icon: 'M12 4v16m8-8H4' },
  ];

  return (
    <aside className="w-72 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <Link to="/" className="text-xl font-black text-indigo-600 tracking-tighter uppercase">
          Modern<span className="text-gray-900">Blog</span>
        </Link>
      </div>
      
      <nav className="flex-grow px-4 space-y-1.5">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
              </svg>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-6">
        <div className="bg-gray-900 rounded-3xl p-6 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
          <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">Enterprise Hub</p>
          <p className="text-xs font-medium text-gray-400 mb-6 leading-relaxed">Collaborate with your team seamlessly.</p>
          <button className="w-full py-3 bg-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-colors">
            Invite Team
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;