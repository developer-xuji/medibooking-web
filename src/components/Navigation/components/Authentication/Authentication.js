import React from "react";
import styled from "styled-components";
import NavItem from "../NavItem";
import FontAwesome from "react-fontawesome";
import Avatar from "./components/Avatar";
import { THEME_COLOR } from "../../../../constants";
import withAuthenticationModals from "../../../withAuthenticationModals/withAuthenticationModals";
import { getRoutePath } from "../../../../utils/getRoute";

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

const Logout = styled(NavItem)`
  color: black;
  &:hover {
    color: ${THEME_COLOR};
  }
`;

export class Authentication extends React.Component {
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
    const { setShowModal, user } = this.props;

    return (
      <Layout>
        {user ? (
          <React.Fragment>
            <Avatar as="a" href={getRoutePath("user_center")} />
            <NavItem as="a" href={getRoutePath("user_center")}>
              {user}
            </NavItem>
            <Logout
              as="a"
              href="/"
              onClick={() => {
                localStorage.clear();
                this.forceUpdate();
              }}
            >
              Log Out
            </Logout>
          </React.Fragment>
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
                onClick={() => setShowModal("LOG_IN")}
              >
                <Icon name="sign-in" style={{ fontSize: "30px" }} />
                Log in
              </NavItem>
            </div>
          </React.Fragment>
        )}
      </Layout>
    );
  }
}

const WithAuthenticationModalsAuthentication = withAuthenticationModals(
  Authentication
);

export default WithAuthenticationModalsAuthentication;
