import axios from "./axios";

export const getAll = (url, params) => {
  return axios.get(url, {params});
};

export const getOne = (url, params) => {
  return axios.get(url, { params });
};

export const update = (url, data) => {
  return axios.put(url, data);
};

export const create = (url, data) => {
  return axios.post(url, data);
};

export const remove = (url, id) => {
  return axios.delete(url, { data: { id: id } });
};
