
import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../types';

interface BlogCardProps {
  blog: Blog;
  horizontal?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, horizontal = false }) => {
  if (horizontal) {
    return (
      <Link to={`/blog/${blog.id}`} className="group flex flex-col md:flex-row gap-6 bg-white p-4 rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/20 transition-all">
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden rounded-xl">
          <img 
            src={blog.imageUrl} 
            alt={blog.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div className="md:w-2/3 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 uppercase tracking-wide">
              {blog.category}
            </span>
            <span className="text-xs text-gray-400 font-medium">{blog.date}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-3">
            {blog.title}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-4">
            {blog.excerpt}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-700">By {blog.authorName}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${blog.id}`} className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/20 transition-all overflow-hidden h-full">
      <div className="h-56 overflow-hidden">
        <img 
          src={blog.imageUrl} 
          alt={blog.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 uppercase tracking-wide">
            {blog.category}
          </span>
          <span className="text-xs text-gray-400 font-medium">{blog.date}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-3 leading-snug">
          {blog.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-6 flex-grow">
          {blog.excerpt}
        </p>
        <div className="flex items-center gap-2 pt-4 border-t border-gray-50">
          <div className="w-6 h-6 rounded-full bg-gray-200"></div>
          <span className="text-xs font-semibold text-gray-700">{blog.authorName}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
