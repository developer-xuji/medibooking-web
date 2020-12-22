import processData from "../apis/processData";

const setPatientInfo = (patientInfo) => {
  const patientId = localStorage.getItem("USER_ID");
  processData(
    "/patients/" + patientId,
    "put",
    null,
    patientInfo
  ).then((response) => console.log(response));
};

export default setPatientInfo;
