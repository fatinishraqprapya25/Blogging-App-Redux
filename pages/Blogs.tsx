
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { BlogCard } from '../components/BlogCard';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

const categories = ['All', 'Technology', 'Design', 'Lifestyle', 'Productivity', 'Culture'];

const Blogs: React.FC = () => {
  const { blogs } = useSelector((state: RootState) => state.blogs);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Writing Archive</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Explore everything we've ever published, categorized and searchable for your convenience.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Filters */}
          <aside className="lg:w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Search</h3>
              <Input 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Categories</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat 
                        ? 'bg-indigo-600 text-white' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-indigo-600 rounded-2xl text-white">
              <h4 className="font-bold mb-2">Want to write for us?</h4>
              <p className="text-indigo-100 text-sm mb-4">We are always looking for fresh perspectives.</p>
              <Button variant="secondary" size="sm" className="w-full text-indigo-600">Apply as Author</Button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredBlogs.map(blog => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                <p className="text-slate-500">No blogs found matching your criteria.</p>
                <Button variant="ghost" className="mt-4" onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
