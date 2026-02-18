import axios from "axios";

const backendURL = "https://dummyjson.com";

export const getCategories = async () => {
  try {
    const { data } = await axios.get(`${backendURL}/products/categories`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${backendURL}/products?limit=0`);
    return data.products;
  } catch (error) {
    throw new Error(error);
  }
};
