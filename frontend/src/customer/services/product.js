import axios from "../utils/axios";

const path = "/product";

export const findByCollection = (idCollection) => {
  return axios.get(`${path}/collection/${idCollection}`);
};

export const showProduct = (slug) => {
  return axios.get(`${path}/${slug}`);
};
