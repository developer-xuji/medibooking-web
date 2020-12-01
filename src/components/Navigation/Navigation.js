import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Main from "./components/Main";
import WithAuthenticationModalsAuthentication from "./components/Authentication";
import NavItem from "./components/NavItem";
import { LOGO } from "../../constants";

const Layout = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  align-items: center;
  line-height: 40px;
`;

const Wapper = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  border-bottom: 1px solid #ccc;
  z-index: 1000;
  top: 0;
`;

const Logo = styled(NavItem)`
  color: #008fb4;
  text-decoration: none;
  padding-left: 10px;
  padding-right: 0;
`;

const Left = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
`;

const Right = styled.div``;

const LogoDiv = styled.div`
  background: url(${LOGO});
  background-size: cover;
  width: 40px;
  height: 40px;
`;

const Navigation = () => {
  return (
    <Wapper>
      <Container>
        <Layout>
          <Left>
            <LogoDiv />
            <Logo as="a" href="/">
              MediBooking
            </Logo>
            <Main />
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
