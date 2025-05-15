import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API so‘rovi
export const fetchUser = createAsyncThunk('USER', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchUser.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state,{payload}) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(fetchUser.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      });
  }
});

export default userSlice.reducer;