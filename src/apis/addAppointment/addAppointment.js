import instance from "../../lib/instance/instance";

const addAppointment = (appointment) =>
  instance
    .post("/management/appointments", appointment)
    .then((response) => console.log(response));

export default addAppointment;
