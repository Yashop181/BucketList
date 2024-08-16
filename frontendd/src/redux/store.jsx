import { configureStore } from '@reduxjs/toolkit';
import bucketListReducer from './bucketListSlice';

export const store = configureStore({
  reducer: {
    bucketList: bucketListReducer
  }
});