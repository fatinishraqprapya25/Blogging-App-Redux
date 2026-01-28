
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-tight">Inkwell</Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/blogs" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Browse Blogs</Link>
            <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Our Story</Link>
            <Link to="/features" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Features</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="primary" size="sm">Get Started</Button>
          </Link>
        </div>
      </nav>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <h2 className="text-xl font-bold text-indigo-600 mb-4">Inkwell</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Empowering voices and stories across the globe. Share your knowledge and build your audience with ease.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/blogs">Explore</Link></li>
                <li><Link to="/write">Write</Link></li>
                <li><Link to="/newsletter">Newsletter</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 Inkwell Media Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
