import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  isLoading: true,
  error: undefined,
};

const URL = 'https://randomuser.me/api/?results=5';
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (thunkAPI) => {
    try {
      const response = await axios(URL);
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
        state.error = 'something went wrong';
      });
  },
});

export default usersSlice.reducer;
