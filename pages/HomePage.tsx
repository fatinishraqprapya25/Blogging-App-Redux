
import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';

const HomePage = () => {
  // Fix 'unknown' state error by explicitly typing the state parameter
  const { blogs } = useSelector((state: RootState) => state.blogs);
  const featuredBlogs = blogs.filter(b => b.featured);

  return (
    <div className="space-y-24">
      <section className="relative h-[600px] rounded-[3rem] overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1600" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/20 to-transparent flex flex-col justify-center p-12 md:p-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black bg-white text-gray-900 uppercase tracking-widest mb-8">
               <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
               Trending Now
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              The Next Wave of Digital Design.
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-xl font-medium">
              We explore the intersection of technology, culture, and design. Join 50,000+ creators and get inspired.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/blogs" 
                className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-black hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/10"
              >
                Start Exploring
              </Link>
              <Link 
                to="/register" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black hover:bg-white/20 transition-all"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Handpicked Excellence</h2>
            <p className="text-gray-400 mt-2 font-medium">Top stories chosen for their impact and depth.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featuredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>

      <section className="bg-gray-900 rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-indigo-500/20 blur-[120px] rounded-full"></div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Your Voice Matters.</h2>
          <p className="text-gray-400 text-lg mb-10 font-medium">
            ModernBlog is a home for your best work. No ads, no noise—just pure, high-quality storytelling.
          </p>
          <Link 
            to="/register" 
            className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/30 inline-block"
          >
            Start Your Free Blog
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
