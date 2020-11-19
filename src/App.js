import React from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import FrontPage from "./components/FrontPage";
import Footer from "./components/Footer";
import PatientLoginPage from "./components/PatientLoginPage";
import SignUpPage from "./components/SignUpPage";
import DoctorLogin from "./components/DoctorLogin/DoctorLogin";
import UserCentre from "./components/UserCentre";
import Keke from "./components/Keke/Keke";
const Layout = styled.div`
  line-height: 1.25;
`;

const App = () => {
  return (
    // <Layout>
    //   <Navigation />
    //   <FrontPage />
    //   <Footer />
    // </Layout>
    <UserCentre />
    // <Keke />
  );
};
export default App;
