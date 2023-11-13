import axios from "../utils/axios";

export const index = (path) => {
  return axios.get(path);
};

export const store = (path, data) => {
  return axios.post(path, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const storeColor = (path, data) => {
  return axios.post(path, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const destroy = (path, id) => {
  return axios.delete(`${path}/${id}`);
};
