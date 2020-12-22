import processData from "../apis/processData";

const cancelAppointment = (appointmentId) => {
  processData(
    "/management/appointments/" + appointmentId,
    "put",
    null,
    null
  ).then((response) => console.log(response));
};

export default cancelAppointment;
