import React from "react";
import styled from "styled-components";
import { LOGO } from "../../constants";
import { FOOT_BACKGROUND } from "../../constants";
import Specialists from "./Components/Specialists";
import Title from "./Components/Title";

const Layout = styled.div`
  background: url(${FOOT_BACKGROUND});
  background-size: cover;
  width: 100%;
  height: 300px;
  margin-top: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.div`
  background: url(${LOGO});
  background-size: cover;
  width: 100px;
  height: 100px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LINK_LIST = [
  {
    key: "our_centers",
    contains: "Our Centers",
  },
  {
    key: "our_doctors",
    contains: "Our Doctors",
  },
  {
    key: "general_information",
    contains: "General Information",
  },
];

const Footer = () => {
  return (
    <Layout>
      <Logo />
      <Info>
        {LINK_LIST.map((l) => (
          <Title key={l.key} titleName={l.contains} />
        ))}
      </Info>
      <Specialists></Specialists>
    </Layout>
  );
};

export default Footer;
