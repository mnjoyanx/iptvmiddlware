import axios from "axios";

axios.defaults.baseURL = "http://185.223.125.144:4000/";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = token || "";
  return config;
});

export default axios;
