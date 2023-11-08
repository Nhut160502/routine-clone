import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    active: false,
  },
  reducers: {
    activeLoading: (state) => {
      state.active = true;
    },
    disActiveLoading: (state) => {
      state.active = false;
    },
  },
});

export const { activeLoading, disActiveLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
