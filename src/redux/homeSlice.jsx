import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  selectedCategory: "Starter",
  platterItems: [],
  categorySearch: "",
  searchQuery: "",
};

// Slice
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCategorySearch: (state, action) => {
      state.categorySearch = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    addToPlatter: (state, action) => {
      state.platterItems.push(action.payload);
    },
    removeFromPlatter: (state, action) => {
      const { id, category } = action.payload;
      state.platterItems = state.platterItems.filter(
        (item) => !(item.item.id === id && item.category === category)
      );
    },
    clearPlatter: (state) => {
      state.platterItems = [];
    },
  },
});

export const {
  setCategorySearch,
  setSearchQuery,
  setSelectedCategory,
  addToPlatter,
  removeFromPlatter,
  clearPlatter,
} = homeSlice.actions;

export default homeSlice.reducer;
