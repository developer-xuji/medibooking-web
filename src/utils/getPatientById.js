import processData from "../apis/processData";

const getPatientById = (patientId) =>
  processData("/patients/patientId/" + patientId, "get", null, null).then(
    (response) => response
  );
export default getPatientById;
