import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    chancheFilterValue: (_, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { chancheFilterValue } = filterSlice.actions;

export default filterSlice.reducer;
