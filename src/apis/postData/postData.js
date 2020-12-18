import instance from "../../lib/instance/instance";

const postData = (url, parameter) =>
  instance.post(url, parameter).then((response) => console.log(response));

export default postData;
