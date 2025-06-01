import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://roscabackend-2.onrender.com",
});

export default apiClient;
