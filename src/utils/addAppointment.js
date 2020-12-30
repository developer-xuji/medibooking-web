import processData from "../apis/processData";

const addAppointment = (appointment) =>
  processData("/management/appointments", "post", null, appointment).then(
    (response) => response
  );

export default addAppointment;
