import axios from "axios";

// const baseURL = import.meta.env.VITE_BACKEND_URL + "/jobs";

export const getData = async (url) => {
  const { data } = await axios.get(`${url}`);
  return data;
};

export const getDataById = async (url, id) => {
  const { data } = await axios.get(`${url}/${id}`);
  return data;
};

export const createData = async (url, newData) => {
  const { data } = await axios.post(url, newData);
  return data;
};

export const updateJob = async (url, updateData) => {
  const { data } = await axios.patch(url, updateData);
  return data;
};

export const replaceData = async (url, id, updatedData) => {
  const { data } = await axios.put(`${url}/${id}`, updatedData);
  return data;
};

export const deleteData = async (url, id) => {
  const { data } = await axios.delete(`${url}/${id}`);
  return data;
};
