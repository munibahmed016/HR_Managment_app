import { configureStore } from '@reduxjs/toolkit';
import jobReducer from '../src/Slice/jobSlice';

const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export default store;
