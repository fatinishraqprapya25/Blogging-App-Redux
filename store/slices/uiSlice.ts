
import { createSlice } from '@reduxjs/toolkit';
import { UIState } from '../../types';

const initialState: UIState = {
  sidebarOpen: true,
  theme: 'light'
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});

export const { toggleSidebar, setTheme } = uiSlice.actions;
export default uiSlice.reducer;
