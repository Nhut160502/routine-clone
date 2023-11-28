import axios from "../utils/axios";

const path = "/collection";
export const index = () => {
  return axios.get(path);
};

export const show = (slug) => {
  return axios.get(`${path}/${slug}`);
};
