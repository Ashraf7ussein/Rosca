import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://192.168.1.24:9000",
});

export default apiClient;
