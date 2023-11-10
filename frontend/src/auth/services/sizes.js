import axios from "../utils/axios";

const path = "/sizes";

export const index = () => {
  return axios.get(path);
};

export const show = (id) => {
  return axios.get(`${path}/${id}`);
};

export const store = (data) => {
  return axios.post(path, data);
};

export const update = (data) => {
  return axios.put(path, data);
};

export const destroy = (id) => {
  return axios.delete(`${path}/${id}`);
};
