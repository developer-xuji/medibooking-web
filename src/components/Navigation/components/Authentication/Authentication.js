import React from "react";
import styled from "styled-components";
import NavItem from "../NavItem";
import DropdownWidget from "../../../DropdownWidget";
import FontAwesome from "react-fontawesome";
import withAuthenticationModals from "../../../withAuthenticationModals/withAuthenticationModals";

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const NakedButton = styled.button`
  background-color: transparent;
  outline: 0;
  border-left: 0;
  border-right: 0;
  cursor: pointer;
  text-align: left;
`;

const LOGIN_MENU = [
  {
    key: "log in as a patient",
    href: "/",
    contains: "Log in as a patient",
  },
  {
    key: "log in as a doctor",
    href: "/",
    contains: "Log in as a patient",
  },
];

const Icon = styled(FontAwesome)`
  margin-right: 10px;
  color: lightgray;
`;

const Authentication = ({ setShowLogInModal, setShowSignUpModal }) => (
  <Layout>
    <NavItem variant="highlight" as={NakedButton} onClick={setShowSignUpModal}>
      <Icon name="user-plus" style={{ fontSize: "30px" }} />
      Sign Up
    </NavItem>
    <div>
      <NavItem as={NakedButton} variant="highlight" onClick={setShowLogInModal}>
        <Icon name="sign-in" style={{ fontSize: "30px" }} />
        Log in
      </NavItem>
      {setShowLogInModal && <DropdownWidget items={LOGIN_MENU} />}
    </div>
    {/* {setShowSignUpModal && (
            <SignUpModel onClose={() => this.setShowSignUpModel(false)} />
          )} */}
  </Layout>
);

const WithAuthenticationModalsAuthentication = withAuthenticationModals(
  Authentication
);

export default WithAuthenticationModalsAuthentication;
