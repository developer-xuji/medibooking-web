export const loadDoctor = (params) => (dispatch) => {
  dispatch(loadDoctorRequested());
  fetch(`http://localhost:8080/doctors/${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    mode: "cors",
    cache: "default",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(loadDoctorSucceeded(data));
    })
    .catch((err) => dispatch(loadDoctorFailed(err)));
};

const loadDoctorRequested = () => ({
  type: "GET_DOCTOR_REQUESTED",
});

const loadDoctorSucceeded = (data) => ({
  type: "GET_DOCTOR_SUCCESS",
  data: { doctor: data || {} },
});

const loadDoctorFailed = (err) => ({
  type: "GET_DOCTOR_FAILED",
  data: { err },
});
