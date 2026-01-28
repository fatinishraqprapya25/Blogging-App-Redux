
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';
import { toggleSidebar } from '../store/slices/uiSlice';
import { Button } from './ui/Button';

export const DashboardHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => dispatch(toggleSidebar())}
          className="p-2 rounded-lg hover:bg-slate-100 lg:hidden"
        >
          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-indigo-600">Inkwell</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex flex-col items-end">
          <span className="text-sm font-semibold text-slate-900">{user?.name}</span>
          <span className="text-xs text-slate-500">{user?.role}</span>
        </div>
        <div className="relative group">
          <img 
            src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}`} 
            alt="User avatar" 
            className="w-10 h-10 rounded-full border-2 border-slate-200 cursor-pointer"
          />
          <div className="absolute right-0 mt-2 w-48 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 origin-top-right transition-all bg-white rounded-xl border shadow-lg py-2">
            <button 
              onClick={() => dispatch(logout())}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
