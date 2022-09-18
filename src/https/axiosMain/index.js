import axios from "axios";

console.log("ENV", process.env.API_ENDPOINT);
const axiosMain = axios.create({
  baseURL: process.env.API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosMain;
