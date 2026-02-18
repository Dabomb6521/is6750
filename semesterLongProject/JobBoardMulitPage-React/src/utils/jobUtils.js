import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL + "/jobs";
export const getJobs = async () => {
  try {
    const { data } = await axios.get(`${baseURL}`);
    return data;
  } catch (err) {
    console.error(
      "There was an error getting data. Please call the help desk" +
        err.toString(),
    );
    return [];
  }
};

export const getJobById = async (id) => {
  try {
    const { data } = await axios.get(`${baseURL}/${id}`);
    return data;
  } catch (err) {
    console.error(
      "There was an error getting data. Please call the help desk" +
        err.toString(),
    );
    return {};
  }
};

export const createJob = async (job) => {
  try {
    const { data } = await axios.post(`${baseURL}`, job);
    return data;
  } catch (err) {
    console.error(
      "There was an error creating data. Please call the help desk" +
        err.toString(),
    );
    return {};
  }
};

export const updateJob = async (id, updateData) => {
  try {
    const { data } = await axios.patch(`${baseURL}//${id}`, updateData);
    return data;
  } catch (err) {
    console.error(
      "There was an error updating data. Please call the help desk" +
        err.toString(),
    );
    throw new Error(err);
  }
};

export const replaceJob = async (id, job) => {
  try {
    const { data } = await axios.put(`${baseURL}/${id}`, job);
    return data;
  } catch (err) {
    console.error(
      "There was an error replacing data. Please call the help desk" +
        err.toString(),
    );
    throw new Error(err);
  }
};

export const deleteJob = async (id) => {
  try {
    const { data } = await axios.delete(`${baseURL}//${id}`);
    return data;
  } catch (err) {
    console.error(
      "There was an error deleting data. Please call the help desk" +
        err.toString(),
    );
    throw new Error(err);
  }
};
