import { createSlice } from "@reduxjs/toolkit";

const subUserSlice = createSlice({
  name: "subUser",
  initialState: {
    open: false,
  },
  reducers: {
    openSubUser: (state) => {
      state.open = true;
    },
    hiddeSubUser: (state) => {
      state.open = false;
    },
  },
});

export const { openSubUser, hiddeSubUser } = subUserSlice.actions;

export default subUserSlice.reducer;
