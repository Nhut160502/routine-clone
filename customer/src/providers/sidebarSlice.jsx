import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    open: false,
    transparent: false,
  },
  reducers: {
    openSidebar: (state) => {
      state.open = true;
    },
    hiddenSidebar: (state) => {
      state.open = false;
    },
    enbleTransparent: (state) => {
      state.transparent = true;
    },
    disableTransparent: (state) => {
      state.transparent = false;
    },
  },
});

export const {
  openSidebar,
  hiddenSidebar,
  enbleTransparent,
  disableTransparent,
} = sidebarSlice.actions;
export default sidebarSlice.reducer;
