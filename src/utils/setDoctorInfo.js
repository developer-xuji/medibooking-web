import processData from "../apis/processData";

const setDoctorInfo = (DoctorInfo) => {
  const doctorId = localStorage.getItem("USER_ID");
  return processData("/doctors/" + doctorId, "put", null, DoctorInfo).then(
    (response) => response
  );
};

export default setDoctorInfo;
