import { createSlice } from "@reduxjs/toolkit";

export const bunSlice = createSlice({
  name: 'bun',
  initialState: {
    buns: []
  },
  reducers: {
    addBun: (state, action) => {
      state.buns.push(action.payload);
    },
    removeBun: (state, action) => {
      state.buns = state.buns.filter(bun => bun.id !== action.payload);
    }
  }
});



export const { addBun, removeBun } = bunSlice.actions;
export default bunSlice.reducer;
