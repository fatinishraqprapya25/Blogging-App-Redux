
import { createSlice } from '@reduxjs/toolkit';

const initialBlogs = [
  {
    id: '1',
    title: 'The Future of Web Development in 2025',
    content: 'The landscape of web development is shifting rapidly with the rise of AI-driven coding assistants and edge computing...',
    excerpt: 'Explore the rapid shifts in web development, from AI-driven coding to edge computing frameworks.',
    authorId: 'auth-1',
    authorName: 'Alex Rivers',
    date: '2024-05-15',
    category: 'Technology',
    imageUrl: 'https://picsum.photos/seed/tech1/800/450',
    featured: true,
  },
  {
    id: '2',
    title: 'Sustainable Living: A Practical Guide',
    content: 'Living a sustainable life doesn\'t mean giving up everything you love...',
    excerpt: 'A comprehensive guide to reducing your carbon footprint without sacrificing quality of life.',
    authorId: 'auth-2',
    authorName: 'Sarah Jenkins',
    date: '2024-05-12',
    category: 'Lifestyle',
    imageUrl: 'https://picsum.photos/seed/nature1/800/450',
  },
  {
    id: '3',
    title: 'Mastering Minimalist UI Design',
    content: 'Minimalism isn\'t just about white space; it\'s about purpose...',
    excerpt: 'Learn the principles of minimalism in UI design and how to apply them effectively.',
    authorId: 'auth-1',
    authorName: 'Alex Rivers',
    date: '2024-05-10',
    category: 'Design',
    imageUrl: 'https://picsum.photos/seed/design1/800/450',
    featured: true,
  }
];

const initialAuthors = [
  { id: 'auth-1', name: 'Alex Rivers', avatar: 'https://i.pravatar.cc/150?u=auth-1', bio: 'Tech enthusiast and full-stack developer.' },
  { id: 'auth-2', name: 'Sarah Jenkins', avatar: 'https://i.pravatar.cc/150?u=auth-2', bio: 'Sustainability advocate and lifestyle blogger.' },
];

// blog slice
const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: initialBlogs,
    authors: initialAuthors,
    loading: false,
    searchQuery: '',
    selectedCategory: 'All',
  },
  reducers: {
    addBlog: (state, action) => {
      state.blogs.unshift(action.payload);
    },
    updateBlog: (state, action) => {
      const index = state.blogs.findIndex(b => b.id === action.payload.id);
      if (index !== -1) state.blogs[index] = action.payload;
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(b => b.id !== action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    register: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    }
  }
});

export const { addBlog, updateBlog, deleteBlog, setSearchQuery, setCategory } = blogSlice.actions;
export const { login, logout, register } = userSlice.actions;

export const blogReducer = blogSlice.reducer;
export const userReducer = userSlice.reducer;
