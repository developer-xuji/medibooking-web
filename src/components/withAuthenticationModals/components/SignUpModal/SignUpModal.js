import React from "react";
import styled from "styled-components";
import Modal from "../../../Modal";
import TextInput from "../../../TextInput";
import withForm from "../../../withForm";
import Fields from "./components/Fields";
import ErrorMessage from "../../../ErrorMessage";
import FormItem from "../../../FormItem";
import signUp from "../../../../apis/signUp";

const ENCRYPTION_STRENGTH = 10;

const PasswordSetGuide = styled.p`
  color: #5c7783;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 0;
  line-height: 21px;
  text-align: center;
`;

const SubmitButton = styled.button`
  width: 100%;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 5px;
  padding-top: 6px;
  padding-bottom: 6px;
  height: auto;
  color: white;
  background: #01a4b7;
  border: 2px solid #01a4b7;
  border-radius: 100px;
  cursor: pointer;
`;

const Footer = styled.div`
  text-align: center;
  font-size: 14px;
  color: #565656;
`;

const LogInButton = styled.button`
  border: none;
  background-color: white;
  outline: none;
  color: #01a4b7;
`;

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: "",
    };
  }

  setErrorMessage(message) {
    this.setState({
      errorMessage: message,
    });
  }
  render() {
    const { errorMessage } = this.state;

    const {
      onClose,
      onLogIn,
      data,
      formDirty,
      setData,
      submit,
      valid,
      getErrorMessage,
    } = this.props;

    var bcrypt = require("bcryptjs");
    var salt = bcrypt.genSaltSync(ENCRYPTION_STRENGTH);

    return (
      <Modal
        onClose={onClose}
        title="Sign up"
        description="Create a free account to book appointments faster and have a personalised health experience."
        body={
          <form
            onSubmit={submit(() => {
              signUp({
                username: data.username.value,
                encodedPassword: bcrypt.hashSync(data.password.value, salt),
              })
                .then((data) => {
                  onClose();
                })
                .catch((error) => console.log(error.response));
            })}
          >
            {errorMessage && (
              <FormItem>
                <ErrorMessage>{errorMessage}</ErrorMessage>
              </FormItem>
            )}
            {Fields.map((f) => (
              <FormItem
                key={f.key}
                error={(formDirty || data[f.key].dirty) && getErrorMessage(f)}
              >
                <TextInput
                  id={f.key}
                  type={f.type}
                  placeholder={f.placeholder}
                  onChange={setData(f.key)}
                />
              </FormItem>
            ))}
            <PasswordSetGuide>
              Use at least 10 characters, avoid dictionary words & common
              passwords.
            </PasswordSetGuide>
            <FormItem>
              <SubmitButton disabled={!valid} block size="lg" variant="success">
                SIGN UP
              </SubmitButton>
            </FormItem>
          </form>
        }
        footer={
          <Footer>
            <span>Already have an account?</span>
            <LogInButton variant="link" onClick={onLogIn}>
              Log in
            </LogInButton>
          </Footer>
        }
      />
    );
  }
}

const WithFormSignUpModal = withForm(Fields)(SignUpModal);

export default WithFormSignUpModal;
