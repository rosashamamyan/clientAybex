import axios from "axios";

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
    if (error.status === 401) {
      try {
        const respons = await axios.get(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", respons.data.access_token);
        return $api.request(originalRequest);
      } catch (e) {
        console.log(e);
      }
    }
  }
);

export default $api;
