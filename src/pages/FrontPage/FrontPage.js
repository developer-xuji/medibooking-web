import React from "react";
import styled from "styled-components";
import { HOME_BACKGROUND } from "../../constants";
import { MOBILE_WIDTH } from "../../constants";
import { JUMBOTRON_PIC } from "../../constants";
import { getRoutePath } from "../../utils/getRoute";
import LoginModal from "../../components/withAuthenticationModals/components/LogInModal";
import Services from "./components/Services";
import DataAds from "./components/DataAds";
import DoctosIntro from "./components/DoctorsIntro";
import CustomerResponse from "./components/CustomerResponse";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${HOME_BACKGROUND});
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 600px;
  background-size: repeat;
  align-items: center;
`;

const SloganContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: lightblue;
  border-bottom-right-radius: 30% 30px;
  border-bottom-left-radius: 30% 30px;
  background-image: url(${JUMBOTRON_PIC});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 32px 10%;
  color: #3f567c;
  font-family: "Open Sans", sans-serif;

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #3f567c;
    margin: 1em 0;
    padding: 0;
    width: 100px;
  }

  h1 {
    font-size: 48px;
    width: 50%;
    margin-top: 0;
    color: #5b7189;
    font-family: "Open Sans", sans-serif;

    @media screen and (max-width: ${MOBILE_WIDTH}) {
      font-size: 36px;
      width: 80%;
    }
  }

  button {
    border: 1px solid transparent;
    padding: 16px 32px;
    background-color: #dfebbc;
    font-weight: bold;
    border-radius: 8px;
    color: #738892;
    outline: none;
  }

  button:hover {
    background-color: #aecc54;
    cursor: pointer;
  }
`;
const token = localStorage.getItem("JWT_TOKEN");
class FrontPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false,
    };
  }
  setShowLoginModal() {
    this.setState({ showLoginModal: true });
  }

  setCloseLoginModal() {
    this.setState({ showLoginModal: false });
  }

  render() {
    return (
      <Layout>
        <SloganContainer>
          <p>Welcome </p> <hr />
          <h1>
            The very best <br />
            <b>general practitioners</b> for you and your family
          </h1>
          <button
            disabled={localStorage.getItem("JWT_TOKEN") === undefined}
            onClick={() =>
              token === undefined || token === null
                ? this.setShowLoginModal()
                : (window.location.href = getRoutePath("booking"))
            }
          >
            Booking Now
          </button>
          {/* {token === undefined || token === null ? <p>Please log in</p> : ""} */}
        </SloganContainer>
        {this.state.showLoginModal && (
          <LoginModal
            onClose={() => this.setCloseLoginModal()}
            onLogIn={() => {}}
          />
        )}
        <DataAds />
        <DoctosIntro />
        <Services />
        <CustomerResponse />
      </Layout>
    );
  }
}
export default FrontPage;
