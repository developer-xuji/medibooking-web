import Axios from "axios";
import axios from "axios";

const getAuth = (token) =>
  axios.post("http://localhost:8080/auth", token).then((response) => {
    return response;
  });

export default getAuth;
