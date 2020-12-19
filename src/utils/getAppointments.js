import processData from "../apis/processData";
import getParameterList from "./getParameterList";

const getAppointments = (parameter) => {
  processData(
    "/management/appointments",
    "get",
    getParameterList(parameter)
  ).then((response) => console.log(response));
};

export default getAppointments;
