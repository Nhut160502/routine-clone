import axios from "../utils/axios";

const path = "/collection";
export const index = () => {
  return axios.get(path);
};
