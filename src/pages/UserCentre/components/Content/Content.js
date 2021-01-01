import React from "react";
import styled from "styled-components";

import PersonalInfo from "./components/PersonalInfo";
import AccountInfo from "./components/AcountInfo";
import ManageBookings from "./components/ManageBookings";
import Menu from "./components/Menu";
import { getRoutePath } from "../../../../utils/getRoute";
import { MOBILE_WIDTH } from "../../../../constants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  /* height: 100%; */
  /* margin: 0;
  padding: 0; */
  width: 100%;
  min-height: 80vh;

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;

const SideBar = styled.div`
  width: 20%;
  /* background: lightblue; */
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    width: 100%;
  }

  border-right: #e1e1e1 1px solid;
`;

const MainContent = styled.div`
  /* background: lightcyan; */
  flex: 1;
  padding: 40px;
  .ant-layout {
    background: white;
  }
  /* height: 800px;
  overflow: overlay; */
`;

const Content = () => {
  return (
    <Router>
      <Layout>
        <SideBar>
          <Menu />
        </SideBar>

        <MainContent>
          <Switch>
            <Route exact path="/" component={PersonalInfo} />
            <Route
              path={getRoutePath("user_center")}
              component={PersonalInfo}
            />
            <Route
              path={getRoutePath("user_center/accountInfo")}
              component={AccountInfo}
            />
            <Route
              path={getRoutePath("user_center/manageBookings")}
              component={ManageBookings}
            />
          </Switch>
        </MainContent>
      </Layout>
    </Router>
  );
};

export default Content;
