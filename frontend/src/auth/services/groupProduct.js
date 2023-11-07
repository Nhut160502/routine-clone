import axios from "../utils/axios";

const path = "/group-product";
const index = () => {
  return axios.get(path);
};

const store = (data) => {
  return axios.post(path, data);
};

export { index, store };
