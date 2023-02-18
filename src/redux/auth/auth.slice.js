import { createSlice } from '@reduxjs/toolkit';
import { authInitState } from './auth.init-state';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
});

export const authReducer = authSlice.reducer;
