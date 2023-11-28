import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: `http://localhost:8080/public/api`,
});

export default axios;
