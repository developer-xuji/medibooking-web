import FrontPage from "./components/FrontPage";
import DoctorsPage from "./components/DoctorsPage";
import PatientLoginPage from "./components/PatientLoginPage";
import UserCenter from "./components/UserCentre";
import DoctorInfo from "./components/DoctorInfo";
import DoctorLogin from "./components/DoctorLogin";
import BookingPage from "./pages/BookingPage";

export const ROUTES = [
  {
    key: "home",
    path: "/",
    page: FrontPage,
  },
  {
    key: "doctors",
    path: "/doctors",
    page: DoctorsPage,
  },
  {
    key: "patient_login",
    path: "/patient_login",
    page: PatientLoginPage,
  },
  {
    key: "user_center",
    path: "/user_center",
    page: UserCenter,
  },
  {
    key: "doctor_info",
    path: "/doctor_info",
    page: DoctorInfo,
  },
  {
    key: "doctor_login",
    path: "/doctor_login",
    page: DoctorLogin,
  },
  {
    key: "booking",
    path: "/booking",
    page: BookingPage,
  },
];
