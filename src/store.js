// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avSlice from './avSlice';
import mealsSlice from './mealsSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avSlice,
    meals: mealsSlice,
  },
});
