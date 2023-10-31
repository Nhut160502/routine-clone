import { createSlice } from "@reduxjs/toolkit/dist";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    open: false,
    user: [],
  },
  reducers: {
    openLogin: (state) => {
      state.open = true;
    },
    hiddenLogin: (state) => {
      state.open = false;
    },
  },
});

export const { openLogin, hiddenLogin } = loginSlice.actions;
export default loginSlice.reducer;
