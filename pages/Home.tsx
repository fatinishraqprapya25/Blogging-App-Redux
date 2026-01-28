
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Button } from '../components/ui/Button';
import { BlogCard } from '../components/BlogCard';

const Home: React.FC = () => {
  const { featuredBlogs } = useSelector((state: RootState) => state.blogs);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-white border-b overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-indigo-50 rounded-full blur-2xl opacity-40"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6">
            New Platform Now Open
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Share your story with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">the whole world.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Inkwell is the most intuitive platform for writers, thinkers, and builders. 
            Beautiful defaults, powerful tools, and an audience that cares.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="px-10 h-14 text-lg">Start Writing - It's Free</Button>
            </Link>
            <Link to="/blogs">
              <Button variant="outline" size="lg" className="px-10 h-14 text-lg">Read Our Latest Blogs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Editor's Picks</h2>
              <p className="text-slate-500">Hand-selected stories that will change how you think.</p>
            </div>
            <Link to="/blogs">
              <Button variant="ghost" className="text-indigo-600 font-bold p-0 hover:bg-transparent">
                View All Blogs &rarr;
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
            <div className="bg-slate-900 rounded-xl p-8 flex flex-col justify-between text-white lg:aspect-auto">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Stay in the loop</h3>
                <p className="text-slate-400 mb-8">Join over 10,000+ readers and get a weekly dose of creative fuel.</p>
              </div>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="w-full bg-white/10 border-white/20 border rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                />
                <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">Subscribe Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-slate-50 py-16 px-6 border-y">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale filter">
           <span className="text-2xl font-black">QUARTZ</span>
           <span className="text-2xl font-black">MEDIUM</span>
           <span className="text-2xl font-black">STRIPE</span>
           <span className="text-2xl font-black">GITHUB</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
