import axios from "axios";

export const instance = axios.create({
  baseURL: "https://todoapp-server-ag97.onrender.com",
});
