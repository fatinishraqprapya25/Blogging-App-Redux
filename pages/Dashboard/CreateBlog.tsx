
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { addBlog, updateDraft } from '../../store/slices/blogSlice';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

const CreateBlog: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { draft } = useSelector((state: RootState) => state.blogs);
  const { user } = useSelector((state: RootState) => state.auth);

  const handlePublish = () => {
    const newBlog = {
      id: Math.random().toString(36).substr(2, 9),
      title: draft.title || 'Untitled Blog',
      excerpt: draft.excerpt || 'No description provided.',
      content: draft.content || '',
      author: user?.name || 'Anonymous',
      publishDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: '5 min',
      category: draft.category || 'Technology',
      image: 'https://picsum.photos/seed/' + Math.random() + '/800/400',
      status: 'published' as const,
      views: 0
    };
    dispatch(addBlog(newBlog));
    navigate('/dashboard/blogs');
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Create New Blog</h1>
          <p className="text-slate-500">Share your thoughts with the community.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">Save Draft</Button>
          <Button variant="primary" onClick={handlePublish}>Publish Now</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm space-y-4">
            <Input 
              label="Blog Title" 
              placeholder="e.g. Ten Habits for Highly Successful Developers" 
              className="text-lg font-bold"
              value={draft.title || ''}
              onChange={(e) => dispatch(updateDraft({ title: e.target.value }))}
            />
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">Content</label>
              <div className="border border-slate-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                <div className="flex items-center gap-1 bg-slate-50 p-2 border-b">
                  {['B', 'I', 'U', 'Link', 'Img'].map(tool => (
                    <button key={tool} className="w-8 h-8 flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-slate-200 rounded">
                      {tool}
                    </button>
                  ))}
                </div>
                <textarea 
                  className="w-full h-96 p-4 resize-none focus:outline-none text-slate-800"
                  placeholder="Tell your story..."
                  value={draft.content || ''}
                  onChange={(e) => dispatch(updateDraft({ content: e.target.value }))}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm space-y-6">
            <h3 className="font-bold text-slate-900">Publishing Settings</h3>
            
            <Input 
              label="Short Excerpt" 
              placeholder="A brief summary for previews..." 
              value={draft.excerpt || ''}
              onChange={(e) => dispatch(updateDraft({ excerpt: e.target.value }))}
            />

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">Category</label>
              <select 
                className="w-full h-10 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={draft.category || 'Technology'}
                onChange={(e) => dispatch(updateDraft({ category: e.target.value }))}
              >
                <option>Technology</option>
                <option>Design</option>
                <option>Lifestyle</option>
                <option>Productivity</option>
              </select>
            </div>

            <div className="pt-6 border-t space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Allow Comments</span>
                <div className="w-10 h-5 bg-indigo-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Make Private</span>
                <div className="w-10 h-5 bg-slate-200 rounded-full relative cursor-pointer">
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-xl text-white">
            <h4 className="font-bold mb-2">Pro Tip: SEO</h4>
            <p className="text-xs text-slate-400 mb-4">Adding relevant tags increases your reach by up to 40%. Use descriptive titles with keywords.</p>
            <button className="text-xs font-bold text-indigo-400">Read our SEO Guide &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
