import React from "react";
import styled from "styled-components";
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import PersonalInfo from "./components/PersonalInfo";
import logo from "../../assets/images/logo.png";
const Layout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;
const NavBar = styled.div`
  width: 100%;
  height: 50px;
  font-size: 30px;
  border-bottom: 1px solid #e1e1e1;
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
`;

const Logo = styled.img`
  position: relative;
  top: 50px;
  width: 200px;
  height: 200px;
  padding-right: 10vw;
`;
const Title = styled.div`
  padding-left: 10vw;
`;

const Body = styled.div`
  flex: 1;
  background-color: #f5f5f5;
`;

const Info = styled.div`
  background: white;
  border: #e1e1e1 1px solid;
  border-radius: 0 0 10px 10px;
  padding: 20px;
  min-height: 70vh;
  margin: 0 12.5%;
`;

const UserCentre = () => (
  <Layout>
    {/* <NavBar>NavBar Bar Bar</NavBar>
    <Banner>
      <Title>User Centre</Title>
      <Logo src={logo} alt="logo" />
    </Banner>
    <Body>
      <Info>
        <PersonalInfo />
      </Info>
    </Body> */}
    <div className="App">
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
    ,
  </Layout>
);

export default UserCentre;
