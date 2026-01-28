
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const navItems = [
  { label: 'Overview', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z', path: '/dashboard/overview' },
  { label: 'My Blogs', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', path: '/dashboard/blogs' },
  { label: 'Create New', icon: 'M12 4v16m8-8H4', path: '/dashboard/create' },
  { label: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', path: '/dashboard/profile' },
];

export const Sidebar: React.FC = () => {
  const { sidebarOpen } = useSelector((state: RootState) => state.ui);
  const location = useLocation();

  return (
    <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col h-full pt-16 lg:pt-0">
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-slate-50">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Support</p>
            <p className="text-xs text-slate-600 mb-3">Need help with your account?</p>
            <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">View Help Center &rarr;</button>
          </div>
        </div>
      </div>
    </aside>
  );
};
