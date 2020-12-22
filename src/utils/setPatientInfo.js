import processData from "../apis/processData";

const setPatientInfo = (patientId, patientInfo) => {
  processData(
    "/patients/" + patientId,
    "put",
    null,
    patientInfo
  ).then((response) => console.log(response));
};

export default setPatientInfo;
