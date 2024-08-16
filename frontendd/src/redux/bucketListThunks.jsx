// src/redux/bucketListThunks.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunks
export const fetchItems = createAsyncThunk('bucketList/fetchItems', async () => {
  const response = await axios.get('http://localhost:5000/api/bucketlist');
  return response.data;
});

export const addItem = createAsyncThunk('bucketList/addItem', async (name) => {
  const response = await axios.post('http://localhost:5000/api/bucketlist', { name });
  return response.data;
});

export const updateItem = createAsyncThunk('bucketList/updateItem', async ({ id, name, visited }) => {
  const response = await axios.patch(`http://localhost:5000/api/bucketlist/${id}`, { name, visited });
  return response.data;
});

export const deleteItem = createAsyncThunk('bucketList/deleteItem', async (id) => {
  await axios.delete(`http://localhost:5000/api/bucketlist/${id}`);
  return id;
});
