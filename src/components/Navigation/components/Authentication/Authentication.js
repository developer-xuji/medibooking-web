import React from "react";
import styled from "styled-components";
import NavItem from "../NavItem";
import DropdownWidget from "../../../DropdownWidget";
import FontAwesome from "react-fontawesome";
import Avatar from "./components/Avatar";
import withAuthenticationModals from "../../../withAuthenticationModals/withAuthenticationModals";
import FormItem from "antd/lib/form/FormItem";

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

const Icon = styled(FontAwesome)`
  margin-right: 10px;
  color: lightgray;
`;

const LOGIN_MENU = [
  {
    key: "log in as a patient",
    href: "#/patient_login",
    contains: "Log in as a patient",
  },
  {
    key: "log in as a doctor",
    href: "#/doctor_login",
    contains: "Log in as a doctor",
  },
];

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ShowLoginMenu: false,
    };
  }

  setShowLoginMenu(value, e) {
    this.setState({
      ShowLoginMenu: value,
    });
    if (e !== null) e.nativeEvent.stopImmediatePropagation();
  }

  componentDidMount() {
    document.addEventListener("click", () =>
      this.setShowLoginMenu(false, null)
    );
  }

  render() {
    const { ShowLoginMenu } = this.state;
    const { setShowModal, user } = this.props;

    return (
      <Layout>
        {user ? (
          <NavItem>{user}</NavItem>
        ) : (
          <React.Fragment>
            <NavItem
              variant="highlight"
              as={NakedButton}
              onClick={() => setShowModal("SIGN_UP")}
            >
              <Icon name="user-plus" style={{ fontSize: "30px" }} />
              Sign Up
            </NavItem>

            <div>
              <NavItem
                as={NakedButton}
                variant="highlight"
                onClick={(e) => this.setShowLoginMenu(!ShowLoginMenu, e)}
              >
                <Icon name="sign-in" style={{ fontSize: "30px" }} />
                Log in
              </NavItem>
              {ShowLoginMenu && <DropdownWidget items={LOGIN_MENU} />}
            </div>
          </React.Fragment>
        )}
        <Avatar as="a" href="#/user_center" />
      </Layout>
    );
  }
}

const WithAuthenticationModalsAuthentication = withAuthenticationModals(
  Authentication
);

export default WithAuthenticationModalsAuthentication;
