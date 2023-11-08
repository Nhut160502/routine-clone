import axios from "../utils/axios";

const path = "/group-product";
const index = () => {
  return axios.get(path);
};

const store = (data) => {
  return axios.post(path, data);
};

const show = (slug) => {
  return axios.get(`${path}/${slug}`);
};

const update = (data) => {
  return axios.put(path, data);
};

const destroy = (id) => {
  return axios.delete(`${path}/${id}`);
};

export { index, store, show, update, destroy };
