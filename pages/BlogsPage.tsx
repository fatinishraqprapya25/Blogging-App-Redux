
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setSearchQuery, setCategory } from '../store/slices';
import BlogCard from '../components/BlogCard';

const CATEGORIES = ['All', 'Technology', 'Lifestyle', 'Design', 'Business', 'Health'];

const BlogsPage: React.FC = () => {
  const { blogs, searchQuery, selectedCategory } = useSelector((state: RootState) => state.blogs);
  // dispatch
  const dispatch = useDispatch();

  // filter blogs function
  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchQuery, selectedCategory]);

  return (
    <div className="space-y-12">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Explore Our Stories</h1>
        <p className="text-gray-500 text-lg">
          Dive into a world of knowledge. Use the filters below to find exactly what you're looking for.
        </p>
      </header>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => dispatch(setCategory(cat))}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${selectedCategory === cat
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 gap-8">
          {filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} horizontal />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-800">No blogs found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
