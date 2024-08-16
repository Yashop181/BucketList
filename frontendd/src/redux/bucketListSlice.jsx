import { createSlice } from '@reduxjs/toolkit';
import { fetchItems, addItem, updateItem, deleteItem } from './bucketListThunks';

const bucketListSlice = createSlice({
  name: 'bucketList',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => { 
        state.status = 'loading'; 
      })
      .addCase(fetchItems.fulfilled, (state, action) => { 
        state.status = 'succeeded'; 
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchItems.rejected, (state, action) => { 
        state.status = 'failed'; 
        state.error = action.error.message; 
      })
      .addCase(addItem.fulfilled, (state, action) => { 
        console.log("Before push:", state.items, action.payload);
        state.items.push(action.payload); 
        console.log("After push:", state.items);
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item._id === action.payload._id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item._id !== action.payload);
      });
  }
});

export default bucketListSlice.reducer;
