import React from "react";
import styled from "styled-components";
import Modal from "../../../Modal";
import TextInput from "../../../TextInput";
import withForm from "../../../withForm";
import Fields from "./components/Fields";
import ErrorMessage from "../../../ErrorMessage";
import FormItem from "../../../FormItem";

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

const SignUpButton = styled.button`
  border: none;
  background-color: white;
  outline: none;
  color: #01a4b7;
`;

class LoginModal extends React.Component {
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
      onSignUp,
      data,
      formDirty,
      setData,
      submit,
      valid,
      getErrorMessage,
    } = this.props;

    return (
      <Modal
        onClose={onClose}
        title="Patient log in"
        description="Log in to book appointments faster."
        body={
          <form>
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
            <FormItem>
              <SubmitButton disabled={!valid} block size="lg" variant="success">
                Log in
              </SubmitButton>
            </FormItem>
          </form>
        }
        footer={
          <Footer>
            <span>Don't have an account?</span>
            <SignUpButton variant="link" onClick={onSignUp}>
              Sign up
            </SignUpButton>
          </Footer>
        }
      />
    );
  }
}

const WithFormSignUpModal = withForm(Fields)(LoginModal);

export default WithFormSignUpModal;
