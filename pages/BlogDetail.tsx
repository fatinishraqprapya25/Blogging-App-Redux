
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

// Blog Detail
const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = useSelector((state: RootState) => state.blogs.blogs.find(b => b.id === id));
  const author = useSelector((state: RootState) => state.blogs.authors.find(a => a.id === blog?.authorId));

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">Blog not found</h2>
        <Link to="/blogs" className="text-indigo-600 hover:underline mt-4 inline-block">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 uppercase">
            {blog.category}
          </span>
          <span className="text-sm text-gray-400">{blog.date}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          {blog.title}
        </h1>
        <p className="text-xl text-gray-500 italic leading-relaxed">
          {blog.excerpt}
        </p>
        <div className="flex items-center gap-4 py-6 border-y border-gray-100">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex-shrink-0">
            {author?.avatar && <img src={author.avatar} alt={author.name} className="w-full h-full rounded-full object-cover" />}
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{blog.authorName}</h4>
            <p className="text-sm text-gray-500">{author?.bio || 'Passionate writer and thought leader.'}</p>
          </div>
        </div>
      </header>

      <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
        <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-loose space-y-8">
        {blog.content.split('\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        {/* Mock additional content for visual length */}
        <p>
          In conclusion, as we navigate through the complexities of our subject matter, it remains clear that intentionality is the bedrock of success. Whether you are building software, designing a home, or simply trying to live more sustainably, the decisions you make today define the world of tomorrow.
        </p>
        <div className="bg-indigo-50 p-8 rounded-2xl border-l-4 border-indigo-600 italic font-medium text-indigo-900">
          "The best way to predict the future is to create it." – Peter Drucker
        </div>
        <p>
          We invite you to join the conversation. What are your thoughts on this topic? Leave a comment below or share this article with your network to spark a discussion.
        </p>
      </div>

      <footer className="pt-12 border-t border-gray-100">
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-semibold text-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            Comment
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-semibold text-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            Share
          </button>
        </div>
      </footer>
    </article>
  );
};

export default BlogDetail;
