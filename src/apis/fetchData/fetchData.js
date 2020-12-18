import instance from "../../lib/instance/instance";

const fetchData = (url, parameter) => {
  const para = parameter ? "?" + parameter.name + "=" + parameter.value : "";
  instance.get(url + para).then((response) => console.log(response.data));
};

export default fetchData;
