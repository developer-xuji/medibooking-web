import processData from "../apis/processData";

const getDoctorById = (doctorId) => {
  return processData("/doctors/" + doctorId, "get", null, null);
};

export default getDoctorById;
