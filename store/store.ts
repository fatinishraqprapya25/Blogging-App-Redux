
import { configureStore } from '@reduxjs/toolkit';
import { blogReducer, userReducer } from './slices';

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    user: userReducer,
  },
});

// RootState is used throughout the application in useSelector calls
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
