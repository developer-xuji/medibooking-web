const TOKEN = localStorage.getItem("JWT_TOKEN");
const sendRestfulApi = (url, method) => {
  const request = {
    mode: "cors",
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  return fetch(url, request)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export default sendRestfulApi;
