import axios from "axios";
const api = axios.create({
  baseURL: "https://hospital-appointment-backend-7cal.onrender.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;