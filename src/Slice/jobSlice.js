import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate API calls
const fetchJobsAPI = async () => {
  return [
    { id: 1, title: 'Frontend Developer', description: 'React Developer', location: 'Remote' },
    { id: 2, title: 'Backend Developer', description: 'Node.js Developer', location: 'Remote' },
  ];
};

const postJobAPI = async (job) => {
  console.log('Job posted:', job);
  return job;
};

// Async thunks
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  return await fetchJobsAPI();
});

export const postJob = createAsyncThunk('jobs/postJob', async (job) => {
  return await postJobAPI(job);
});

// Slice
const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
      })
      .addCase(postJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      });
  },
});

export default jobSlice.reducer;
