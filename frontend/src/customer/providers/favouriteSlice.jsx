import { createSlice } from "@reduxjs/toolkit";
const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    open: false,
    data: [],
  },
  reducers: {
    openFavourite: (state) => {
      state.open = true;
    },
    hiddeFavourite: (state) => {
      state.open = false;
    },
  },
});

export const { openFavourite, hiddeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
