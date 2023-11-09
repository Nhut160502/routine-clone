import axios from "../utils/axios";

const path = "/collection";

export const index = () => {
  return axios.get(path);
};

export const store = (data) => {
  return axios.post(path, data);
};

export const show = (slug) => {
  return axios.get(`${path}/${slug}`);
};
