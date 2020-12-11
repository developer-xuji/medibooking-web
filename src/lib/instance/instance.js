import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

instance.interceptors.response.use((response) => {
  const authToken = response.headers.authorization;
  const jwtToken = authToken.substring(7);
  localStorage.setItem("JWT_TOKEN", jwtToken);
  return response;
});

export default instance;
