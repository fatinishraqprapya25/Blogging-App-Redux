
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import blogReducer from './slices/blogSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
