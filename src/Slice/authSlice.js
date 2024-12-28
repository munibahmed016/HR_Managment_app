import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate API calls
export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
 //yahn apni api's lagana 
  console.log('Logging in with credentials:', credentials);
  return { ...credentials, role: 'candidate' }; // Simulated response
});

export const signupUser = createAsyncThunk('auth/signupUser', async (userDetails) => {
    //yahn apni api's lagana 
  console.log('Signing up with details:', userDetails);
  return userDetails; // Simulated response
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
