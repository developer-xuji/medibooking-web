import processData from "../apis/processData";

const addAppointment = (patient) =>
  processData("/patients", "post", null, patient)
    .then((response) => response)
    .catch((response) => response);
export default addAppointment;
