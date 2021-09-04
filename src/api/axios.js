import axios from "axios";

axios.defaults.baseURL = "http://192.168.8.51:4000/";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = token || "";
  return config;
});

export default axios;
