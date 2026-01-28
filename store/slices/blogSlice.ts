
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlogState, Blog } from '../../types';

const mockBlogs: Blog[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends in React, Server Components, and the evolution of the web.',
    content: 'Full content goes here...',
    author: 'Alex Rivera',
    publishDate: 'Oct 24, 2023',
    readTime: '5 min',
    category: 'Technology',
    image: 'https://picsum.photos/seed/web/800/400',
    status: 'published',
    views: 1240
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS',
    excerpt: 'How to build beautiful, responsive interfaces at lightning speed using utility classes.',
    content: 'Full content goes here...',
    author: 'Sarah Chen',
    publishDate: 'Nov 12, 2023',
    readTime: '8 min',
    category: 'Design',
    image: 'https://picsum.photos/seed/design/800/400',
    status: 'published',
    views: 890
  },
  {
    id: '3',
    title: 'Productivity for Modern Creators',
    excerpt: 'Balancing creativity with efficiency in a digital-first world.',
    content: 'Full content goes here...',
    author: 'Alex Rivera',
    publishDate: 'Dec 05, 2023',
    readTime: '4 min',
    category: 'Lifestyle',
    image: 'https://picsum.photos/seed/lifestyle/800/400',
    status: 'published',
    views: 2100
  }
];

const initialState: BlogState = {
  blogs: mockBlogs,
  featuredBlogs: mockBlogs.slice(0, 2),
  selectedBlog: null,
  draft: {}
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
    },
    selectBlog: (state, action: PayloadAction<Blog | null>) => {
      state.selectedBlog = action.payload;
    },
    updateDraft: (state, action: PayloadAction<Partial<Blog>>) => {
      state.draft = { ...state.draft, ...action.payload };
    },
    addBlog: (state, action: PayloadAction<Blog>) => {
      state.blogs.unshift(action.payload);
    },
    deleteBlog: (state, action: PayloadAction<string>) => {
      state.blogs = state.blogs.filter(b => b.id !== action.payload);
    }
  }
});

export const { setBlogs, selectBlog, updateDraft, addBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
