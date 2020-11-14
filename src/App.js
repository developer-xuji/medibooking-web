import React from "react";
import Navigation from "./components/Navigation";
import SignUpPage from "./components/SignUpPage";
import PatientLoginPage from "./components/PatientLoginPage";
import styled from "styled-components";

const Debug = styled.div`
  background-color: white;
`;

const App = () => {
  return (
    <Debug>
      <Navigation />
      <SignUpPage />
      <PatientLoginPage />
    </Debug>
  );
};
export default App;
