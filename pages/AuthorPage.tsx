
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBlog } from '../store/slices';
import { RootState } from '../store/store';

const AuthorPage = () => {
  // Use RootState to provide proper typing for user state
  const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    category: 'Technology',
    content: '',
    excerpt: '',
  });

  if (!isAuthenticated) {
    return (
      <div className="max-w-2xl mx-auto py-32 text-center space-y-10">
        <div className="text-8xl">✍️</div>
        <h1 className="text-5xl font-black text-gray-900 tracking-tighter">Tell Your Story.</h1>
        <p className="text-xl text-gray-500 font-medium leading-relaxed">
          Log in or register to start sharing your ideas with our growing community of readers.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={() => navigate('/login')} className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 transition-all hover:bg-indigo-700">
            Log in to Write
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now().toString(),
      title: formData.title,
      content: formData.content,
      excerpt: formData.excerpt,
      authorId: currentUser?.id,
      authorName: currentUser?.name,
      date: new Date().toISOString().split('T')[0],
      category: formData.category,
      imageUrl: `https://picsum.photos/seed/${Date.now()}/1200/800`,
    };
    dispatch(addBlog(newBlog));
    navigate('/dashboard');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl font-black text-gray-900 tracking-tight">Create New Draft</h1>
        <p className="text-gray-400 mt-3 font-medium text-lg">Focus on the writing. We'll handle the rest.</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-12 pb-20">
        <div className="space-y-4">
          <input 
            type="text" 
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Story Title"
            className="w-full text-5xl font-black border-none focus:outline-none focus:ring-0 placeholder:text-gray-200"
          />
          <div className="h-px bg-gray-100 w-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Story Category</label>
            <select 
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-indigo-500 outline-none font-bold"
            >
              <option>Technology</option>
              <option>Lifestyle</option>
              <option>Design</option>
              <option>Business</option>
              <option>Health</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Hook / Excerpt</label>
            <input 
              type="text" 
              required
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="What's this about?"
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-indigo-500 outline-none font-bold"
            />
          </div>
        </div>

        <div className="space-y-2">
           <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Content</label>
          <textarea 
            required
            rows={15}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Tell your story. Use markdown or plain text..."
            className="w-full px-8 py-8 rounded-3xl bg-gray-50 border-none focus:ring-2 focus:ring-indigo-500 outline-none leading-relaxed text-lg"
          ></textarea>
        </div>

        <div className="flex items-center justify-between pt-10">
          <button type="button" onClick={() => navigate(-1)} className="text-sm font-black text-gray-400 hover:text-gray-900 transition-colors">
            Discard Draft
          </button>
          <button 
            type="submit" 
            className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100"
          >
            Publish Story Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthorPage;
