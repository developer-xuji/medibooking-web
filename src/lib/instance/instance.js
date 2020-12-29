import axios from "axios";
import getAuth from "../../apis/getAuth";
import { MEDIBOOKING_URL } from "../../env";

const instance = axios.create({
  baseURL: MEDIBOOKING_URL,
});

instance.interceptors.response.use((response) => {
  const authToken = response.headers.authorization;
  if (authToken) {
    const jwtToken = authToken.substring(7);
    localStorage.setItem("JWT_TOKEN", jwtToken);
    console.log(jwtToken);
    getAuth({ token: jwtToken });
  }
  return response;
});

instance.interceptors.request.use((request) => {
  const token = window.localStorage.getItem("JWT_TOKEN");
  if (token) {
    request.headers["Authorization"] = "Bearer " + token;
  }
  return request;
});

export default instance;
