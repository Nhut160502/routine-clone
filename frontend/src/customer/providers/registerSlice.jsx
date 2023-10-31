import { createSlice } from "@reduxjs/toolkit/dist";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    open: false,
  },
  reducers: {
    openRegister: (state) => {
      state.open = true;
    },
    hideRegister: (state) => {
      state.open = false;
    },
  },
});

export const { openRegister, hideRegister } = registerSlice.actions;
export default registerSlice.reducer;
