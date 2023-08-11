import axios from "axios";
import Swal from "sweetalert2";

export const API_URL = "http://localhost:8080";

const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const respons = await axios.get(`${API_URL}/api/auth/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", respons.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log(e);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }
);

export default $api;
