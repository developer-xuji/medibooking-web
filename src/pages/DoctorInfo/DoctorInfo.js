import React from "react";
import styled from "styled-components";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Link from "./components/Link";

const Container = styled.div`
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background: #fff;
  box-shadow: 0 1px 10px rgba(92, 119, 131, 0.15);
  border-radius: 4px;
  margin: 24px auto;
  padding: 24px;
  text-align: center;
`;

const DoctorInfo = () => {
    return (
      <Container>
        <Profile />
        <Contact />
        <Link />
      </Container>
    );
  };
  export default DoctorInfo;