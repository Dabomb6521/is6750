import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Get all messages
export const getAllMessages = async () => {
  const { data } = await axios.get(`${BACKEND_URL}/messages`);
  return data;
};

// Get all channels
export const getChannels = async () => {
  const { data } = await axios.get(`${BACKEND_URL}/channels`);
  return data;
};

// Get all users
export const getAllUsers = async () => {
  const { data } = await axios.get(`${BACKEND_URL}/users`);
  return data;
};
