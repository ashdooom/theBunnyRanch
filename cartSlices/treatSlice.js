import { createSlice } from "@reduxjs/toolkit";

export const treatSlice = createSlice({
  name: 'treat',
  initialState: {
    treats: []
  },
  reducers: {
    addTreat: (state, action) => {
        console.log("Adding treat to state", action.payload);
        state.treats.push(action.payload);
    },
    
    removeTreat: (state, action) => {
      state.treats = state.treats.filter(treat => treat.id !== action.payload);
    }
  }
});

export const { addTreat, removeTreat } = treatSlice.actions;
export default treatSlice.reducer;
