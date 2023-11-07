import axiosSetup from "./axios";

// Add a request interceptor
const axiosInterceptor = () => {
  axiosSetup.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  axiosSetup.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response?.data;
    },

    function (error) {
      return Promise.reject(error);
    },
  );
};

export default axiosInterceptor;
