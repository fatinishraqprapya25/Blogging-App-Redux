
import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';
import { Sidebar } from '../components/Sidebar';

export const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto custom-scrollbar p-6">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
