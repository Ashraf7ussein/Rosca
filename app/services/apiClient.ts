import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://roscabackend.onrender.com/api/rosca",
});

export default apiClient;
