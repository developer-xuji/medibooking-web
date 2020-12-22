import processData from "../apis/processData";

const getPatientInfo = (patientId) =>
  processData("/patients/" + patientId, "get", null, null).then((response) =>
    console.log(response)
  );
export default getPatientInfo;
