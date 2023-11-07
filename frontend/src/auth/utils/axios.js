import axios from "axios";

const axiosSetup = axios.create({
  baseURL: `http://localhost:8080/api/`,
});

export default axiosSetup;
