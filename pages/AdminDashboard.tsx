
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteBlog } from '../store/slices';
import { Link } from 'react-router-dom';

// Admin Dashboard Home
const AdminDashboard: React.FC = () => {
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const user = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch();

  if (user?.role !== 'admin') {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-600">Access Denied</h2>
        <p className="mt-4 text-gray-600">You do not have administrative privileges to view this page.</p>
        <Link to="/" className="text-indigo-600 hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500">Manage all content across the platform.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase">Total Posts</span>
            <span className="text-2xl font-bold text-indigo-600">{blogs.length}</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase">Drafts</span>
            <span className="text-2xl font-bold text-orange-400">0</span>
          </div>
        </div>
      </header>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Article</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Author</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {blogs.map(blog => (
                <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                        <img src={blog.imageUrl} alt="" className="w-full h-full object-cover" />
                      </div>
                      <span className="font-semibold text-gray-900 max-w-xs truncate">{blog.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{blog.authorName}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-600 uppercase">
                      {blog.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {blog.date}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="inline-block p-2 text-gray-400 hover:text-indigo-600 transition-colors"
                      title="View"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </Link>
                    <button
                      onClick={() => dispatch(deleteBlog(blog.id))}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      title="Delete"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
