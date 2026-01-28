import { configureStore } from '@reduxjs/toolkit';
import { blogReducer, userReducer } from './slices.js';

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    user: userReducer,
  },
});