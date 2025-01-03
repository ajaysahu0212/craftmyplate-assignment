import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeSlice"; // Import the slice reducer

const store = configureStore({
  reducer: {
    home: homeReducer, // Attach your slice reducer to the store
  },
});

export default store;
