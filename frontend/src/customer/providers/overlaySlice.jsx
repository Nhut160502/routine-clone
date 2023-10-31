import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice({
  name: "overlay",
  initialState: {
    open: false,
  },
  reducers: {
    openOverlay: (state) => {
      state.open = true;
    },
    hiddeOverlay: (state) => {
      state.open = false;
    },
  },
});

export const { openOverlay, hiddeOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;
