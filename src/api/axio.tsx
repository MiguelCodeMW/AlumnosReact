// src/api/axios.js
import axios from "axios";
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  // baseURL: "http://127.0.0.1:8000/api",
  // baseURL: API_BASE_URL,
  baseURL: "http:desplieguedemiaplicacion.duckdns.org",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
