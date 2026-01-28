
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices';
import { RootState } from '../store/store';

const Layout = ({ children }) => {
  // Use RootState to type the selector and fix the 'unknown' state error
  const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname.startsWith('/dashboard');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/blogs' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  // If we are in the dashboard, we use a different layout style (managed within Dashboard.tsx)
  // but we keep the main nav for public pages
  if (isDashboard) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/80 border-b border-gray-100 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-2xl font-black text-indigo-600 tracking-tighter">
              MODERN<span className="text-gray-900">BLOG</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-all ${
                    location.pathname === link.path ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-6">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-xs font-bold text-gray-900">{currentUser?.name}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">Author</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="text-sm font-bold text-gray-600 px-4 py-2 hover:text-indigo-600">
                  Login
                </Link>
                <Link to="/register" className="bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all">
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-6 py-10 w-full">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/" className="text-xl font-black text-gray-900 tracking-tighter">
            MODERN<span className="text-indigo-600">BLOG</span>
          </Link>
          <p className="text-gray-400 text-sm">
            © 2024 Built with Passion for the Modern Web.
          </p>
          <div className="flex gap-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
