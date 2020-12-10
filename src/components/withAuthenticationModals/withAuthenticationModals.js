import React from "react";
import SignUpModal from "./components/SignUpModal";
import LogInModal from "./components/LogInModal";

const withAuthenticationModals = (Component) => {
  class AuthenticationModals extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        showModal: null,
        user: null,
      };

      this.setShowModal = this.setShowModal.bind(this);
    }

    setShowModal(name) {
      this.setState({
        showModal: name,
      });
    }

    setUser(data) {
      this.setState({
        user: data,
      });
    }
    render() {
      const { showModal, user } = this.state;

      return (
        <React.Fragment>
          <Component
            {...this.props}
            user={user}
            setShowModal={this.setShowModal}
          />
          {showModal === "SIGN_UP" && (
            <SignUpModal
              onClose={() => this.setShowModal(null)}
              onLogIn={() => this.setShowModal("LOG_IN")}
            />
          )}
          {showModal === "LOG_IN" && (
            <LogInModal
              onClose={() => this.setShowModal(null)}
              onSignUp={() => this.setShowModal("SIGN_UP")}
              onLogIn={(data) => this.setUser(data)}
            />
          )}
        </React.Fragment>
      );
    }
  }

  return AuthenticationModals;
};

export default withAuthenticationModals;
