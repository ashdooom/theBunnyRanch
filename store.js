import { configureStore } from '@reduxjs/toolkit';
import bunReducer from './cartSlices/bunSlice';
import treatReducer from './cartSlices/treatSlice';

export const store = configureStore({
  reducer: {
    bun: bunReducer,
    treat: treatReducer,
  },
});

export default store;
