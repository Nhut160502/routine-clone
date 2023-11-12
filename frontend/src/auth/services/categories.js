import axios from "../utils/axios";

const path = "/categories";

export const index = () => {
  return axios.get(path);
};

export const store = (data) => {
  return axios.post(path, data);
};

export const show = (slug) => {
  return axios.get(`${path}/${slug}`);
};

export const showByIdGroup = (id) => {
  return axios.get(`${path}/group/${id}`);
};

export const update = (data) => {
  return axios.put(path, data);
};

export const destroy = (id) => {
  return axios.delete(`${path}/${id}`);
};
