import React from "react";
import styled from "styled-components";

import Container from "../Container";
import WithAuthenticationModalsAuthentication from "./components/Authentication";
import NavItem from "./components/NavItem";
import { LOGO, THEME_COLOR, MOBILE_WIDTH } from "../../constants";
import { getRoutePath } from "../../utils/getRoute";

const Layout = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  line-height: 40px;
  width: 70vw;
`;

const Wapper = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  border-bottom: 1px solid #ccc;
  z-index: 1000;
  top: 0;
  display: flex;
`;

const Logo = styled(NavItem)`
  color: ${THEME_COLOR};
  text-decoration: none;
  padding-left: 10px;
  padding-right: 0;
  display: flex;
`;

const Title = styled.div`
  text-decoration: none;
  color: ${THEME_COLOR};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
const LOGOSIZE = 40;
const LogoDiv = styled.div`
  background: url(${LOGO});
  background-size: cover;
  width: ${LOGOSIZE}px;
  height: ${LOGOSIZE}px;
  margin-right: 10px;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    display: none;
  }
`;

const Navigation = () => {
  return (
    <Wapper>
      <Container>
        <Layout>
          <Left>
            <Logo as="a" href={getRoutePath("home")}>
              <LogoDiv />
              <Title>MediBooking</Title>
            </Logo>
          </Left>
          <Right>
            <WithAuthenticationModalsAuthentication>
              Authentication
            </WithAuthenticationModalsAuthentication>
          </Right>
        </Layout>
      </Container>
    </Wapper>
  );
};
export default Navigation;
