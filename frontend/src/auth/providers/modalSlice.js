import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    active: false,
    loading: false,
    handle: null,
  },
  reducers: {
    activeModal: (state) => {
      state.active = true;
      state.loading = false;
      state.handle = null;
    },

    disActiveModal: (state) => {
      state.active = false;
      state.loading = false;
      state.handle = null;
    },

    confirmDelete: (state) => {
      state.loading = true;
    },

    refuseDelete: (state) => {
      state.active = false;
      state.loading = false;
      state.handle = null;
    },

    handleModalDelete: (state, action) => {
      state.handle = action.payload;
    },
  },
});

export const {
  activeModal,
  disActiveModal,
  confirmDelete,
  refuseDelete,
  handleModalDelete,
} = modalSlice.actions;
export default modalSlice.reducer;
