import React from "react";
import styled from "styled-components";
import Content from "./components/Content";
import logo from "../../assets/images/logo.png";
import { MOBILE_WIDTH } from "../../constants";
const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3d3d3d;
  color: white;
  height: 100px;
  font-size: 50px;
  font-weight: 500;
  padding: 0 2.5vw;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    height: 200px;
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 80px;
  padding-right: 10vw;
`;
const Title = styled.div`
  padding-left: 10vw;
`;

const Body = styled.div`
  flex: 1;
  background-color: #f5f5f5;
`;

const Main = styled.div`
  background: white;
  border: #e1e1e1 1px solid;
  min-height: 80vh;
  margin: 0 12.5%;
`;

class UserCentre extends React.Component {
  render() {
    return (
      <Layout>
        <Banner>
          <Title>User Centre</Title>
          <Logo src={logo} alt="logo" />
        </Banner>
        <Body>
          <Main>
            <Content />
          </Main>
        </Body>
      </Layout>
    );
  }
}

export default UserCentre;
