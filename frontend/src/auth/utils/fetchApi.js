import { activeLoading, disActiveLoading } from "../providers/loadingSlice";
import { activeModal, handleModalDelete } from "../providers/modalSlice";
import toast from "./toast";

export const getDataApi = async (dispatch, api, setState, table) => {
  dispatch(activeLoading());
  try {
    const res = await api();
    if (res.success) {
      if (table) {
        setState(res.data);
      } else {
        res.data.map((item) =>
          setState((pre) => [...pre, { label: item.name, value: item._id }]),
        );
      }
    }
    dispatch(disActiveLoading());
  } catch (error) {
    dispatch(disActiveLoading());
    return error;
  }
};

export const getDataApiParams = async (
  dispatch,
  api,
  params,
  setState,
  table,
) => {
  dispatch(activeLoading());
  try {
    const res = await api(params);
    if (res.success) {
      if (table) {
        setState(res.data);
      } else {
        res.data.map((item) =>
          setState((pre) => [...pre, { label: item.name, value: item._id }]),
        );
      }
    }
    dispatch(disActiveLoading());
  } catch (error) {
    dispatch(disActiveLoading());
    return error;
  }
};

export const deleteDataById = (dispatch, apiDelete, id, state, setState) => {
  dispatch(activeModal());
  const handle = async () => {
    try {
      const res = await apiDelete(id);
      if (res.success) {
        setState(state.filter((item) => item._id !== id));
        toast.success(res.message);
      }
    } catch (error) {
      return error;
    }
  };
  dispatch(handleModalDelete(handle));
};
