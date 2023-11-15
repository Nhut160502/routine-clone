import axios from "../utils/axios";

const path = "/category-child";

export const index = () => {
  return axios.get(path);
};

export const show = (slug) => {
  return axios.get(`${path}/${slug}`);
};

export const showByIdCategory = (id) => {
  return axios.get(`${path}/category/${id}`);
};

export const store = (data) => {
  return axios.post(path, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const update = (data) => {
  return axios.put(path, data);
};

export const destroy = (id) => {
  return axios.delete(`${path}/${id}`);
};
