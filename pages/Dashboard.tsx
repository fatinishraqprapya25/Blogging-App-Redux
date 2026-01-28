
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog } from '../store/slices';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { RootState } from '../store/store';

const Dashboard = () => {
  // Use RootState to fix property access on the state object
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-grow p-10 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Dashboard
            </h1>
            <p className="text-gray-500 mt-1">
              {isAuthenticated ? `Welcome back, ${currentUser?.name}` : 'Public dashboard view.'}
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-white px-8 py-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Reach</span>
              <span className="text-2xl font-black text-gray-900">1.2M</span>
            </div>
            <div className="bg-indigo-600 px-8 py-5 rounded-3xl shadow-lg shadow-indigo-100 flex flex-col text-white">
              <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Active Posts</span>
              <span className="text-2xl font-black">{blogs.length}</span>
            </div>
          </div>
        </header>

        <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Platform Overview</h2>
            <button className="text-xs font-bold text-indigo-600 hover:underline">Export Data</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Story Title</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Author</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {blogs.map(blog => (
                  <tr key={blog.id} className="group hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                          <img src={blog.imageUrl} alt="" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-gray-900 max-w-xs truncate">{blog.title}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-semibold text-gray-500">{blog.authorName}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black bg-indigo-50 text-indigo-600 uppercase tracking-tighter">
                        {blog.category}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <Link to={`/blog/${blog.id}`} className="p-2 text-gray-400 hover:text-indigo-600">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                         </Link>
                         <button onClick={() => dispatch(deleteBlog(blog.id))} className="p-2 text-gray-400 hover:text-red-600">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                         </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
