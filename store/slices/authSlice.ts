
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '../../types';

const initialState: AuthState = {
  user: {
    id: '1',
    name: 'Alex Rivera',
    email: 'alex@example.com',
    avatar: 'https://picsum.photos/seed/alex/100/100',
    role: 'author'
  },
  isAuthenticated: true, // Set to true for UI demo purposes
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  }
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
