
import React from 'react';
import { Blog } from '../types';

interface BlogCardProps {
  blog: Blog;
  compact?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, compact = false }) => {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {!compact && (
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-xs font-semibold bg-white/90 backdrop-blur rounded-full text-indigo-700 uppercase tracking-wider shadow-sm">
              {blog.category}
            </span>
          </div>
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
          <span>{blog.publishDate}</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
          <span>{blog.readTime} read</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-2">
          {blog.title}
        </h3>
        <p className="text-slate-600 text-sm line-clamp-3 mb-4">
          {blog.excerpt}
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
          <img 
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(blog.author)}&background=random`} 
            alt={blog.author} 
            className="w-8 h-8 rounded-full border border-slate-200"
          />
          <span className="text-sm font-medium text-slate-700">{blog.author}</span>
        </div>
      </div>
    </div>
  );
};
