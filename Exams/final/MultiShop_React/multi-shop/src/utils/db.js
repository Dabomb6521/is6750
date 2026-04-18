import axios from "axios";

const db = axios.create({
  baseURL: "https://corbridge-multi-shop-default-rtdb.firebaseio.com/",
});

export default db;
