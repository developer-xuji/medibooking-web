import React from "react";
import SignUpModal from "./components/SignUpModal";
import LogInModal from "./components/LogInModal"

const withAuthenticationModals = (Component) => {
  class AuthenticationModals extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        showModal: null,
      };

      this.setShowSignUpModal = this.setShowSignUpModal.bind(this);
      this.setShowLogInModal = this.setShowLogInModal.bind(this);
    }

    setShowLogInModal() {
      this.setState({ showModal: "LOG_IN" });
    }

    setShowSignUpModal() {
      this.setState({ showModal: "SIGN_UP" });
    }

    setShowForgetPasswordModal() {
      this.setState({ showModal: "FORGET_PASSWORD" });
    }

    setCloseModal() {
      this.setState({ showModal: null });
    }

    render() {
      const { showModal } = this.state;

      return (
        <React.Fragment>
          <Component
            {...this.props}
            setShowSignUpModal={this.setShowSignUpModal}
            setShowLogInModal = {this.setShowLogInModal}
          />
          {showModal === "SIGN_UP" && (
            <SignUpModal
              onClose={() => this.setCloseModal()}
              onLogIn={() => this.setShowLogInModal()}
            />
          )}
          {showModal === "LOG_IN" && (
            <LogInModal
              onClose={() => this.setCloseModal()}
              onSignUp={() => this.setShowSignUpModal()}
            />
          )}
        </React.Fragment>
      );
    }
  }

  return AuthenticationModals;
};

export default withAuthenticationModals;
