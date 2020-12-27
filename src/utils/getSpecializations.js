import processData from "../apis/processData";

const getSpecializations = () =>
  processData("/specializations", "get", null).then((response) => response);
export default getSpecializations;
