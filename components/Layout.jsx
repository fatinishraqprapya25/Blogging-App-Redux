import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices.js';

const Layout = ({ children }) => {
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);
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

  if (isDashboard) return <div className="min-h-screen bg-gray-50">{children}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/70 border-b border-gray-100 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-xl font-black text-indigo-600 tracking-tighter uppercase">
              Modern<span className="text-gray-900">Blog</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold transition-all ${
                    location.pathname === link.path ? 'text-indigo-600' : 'text-gray-400 hover:text-indigo-600'
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
                <Link to="/author" className="hidden sm:block text-xs font-bold text-gray-500 hover:text-indigo-600 uppercase tracking-widest">
                  Write Story
                </Link>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                    {currentUser?.name?.[0].toUpperCase()}
                  </div>
                  <button onClick={handleLogout} className="text-xs font-bold text-gray-900 bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="text-sm font-bold text-gray-600 px-4 py-2 hover:text-indigo-600">Login</Link>
                <Link to="/register" className="bg-indigo-600 text-white px-6 py-2.5 rounded-2xl text-sm font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all">Get Started</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
             <h2 className="text-xl font-black text-gray-900 tracking-tighter uppercase mb-6">Modern<span className="text-indigo-600">Blog</span></h2>
             <p className="text-gray-400 max-w-xs leading-relaxed">The ultimate platform for modern creators, thinkers, and builders.</p>
          </div>
          <div>
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link to="/blogs" className="hover:text-indigo-600">Explore</Link></li>
              <li><Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link></li>
              <li><Link to="/author" className="hover:text-indigo-600">Publish</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Connect</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-indigo-50 transition-colors cursor-pointer">
                <div className="w-4 h-4 bg-gray-400 rounded-sm" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center hover:bg-indigo-50 transition-colors cursor-pointer">
                <div className="w-4 h-4 bg-gray-400 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-gray-50 text-center text-xs font-bold text-gray-300 uppercase tracking-widest">
          © 2024 ModernBlog Platform
        </div>
      </footer>
    </div>
  );
};

export default Layout;