import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    open: false,
    data: [],
  },
  reducers: {
    openCart: (state) => {
      state.open = true;
    },
    hiddeCart: (state) => {
      state.open = false;
    },
    storeCart: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    removeCart: (state, action) => {
      state.data = state.data.filter((item) => item?.id === action.payload);
    },
  },
});

export const { openCart, hiddeCart, storeCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
