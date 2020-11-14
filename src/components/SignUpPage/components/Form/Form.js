import React from "react";
import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px !important;
  padding: 18px 12px;
  height: auto;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  color: #2b4b5a;
  transition: all 0.3s ease;
  will-change: transform;
`;

const DividingLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #5c7783;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 12px;
  font-weight: 500;

  &:before {
    content: "";
    width: 100%;
    height: 1px;
    background: #e3e8ed;
    margin: 0 10px;
  }
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background: #e3e8ed;
    margin: 0 10px;
  }
`;

const PasswordHint = styled.div`
  color: #5c7783;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 0;
  line-height: 21px;
  text-align: center;
`;

const SignUpButton = styled.div`
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
  padding-top: 20px;
  font-size: 14px;
  color: #565656;
`;

const Form = () => {
  return (
    <>
      <DividingLine>OR</DividingLine>
      <form>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Username:"
          data-parsley-type-message="Please enter a valid username"
          required=""
          data-parsley-required-message="Please enter your username"
        />
        <Input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First name"
          required=""
          data-parsley-required-message="Please enter your first name"
          autocomplete="off"
        />
        <Input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last name"
          required=""
          data-parsley-required-message="Please enter your last name"
          autocomplete="off"
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required="required"
          data-parsley-required-message="Please enter a password"
          minlength="10"
          data-parsley-minlenth-message="Passwords must be 10 characters or more, and not a common well known password"
          autocomplete="off"
        />
      </form>
      <PasswordHint>
        Please use at least 10 characters, avoid dictionary words and common
        passwords.
      </PasswordHint>
      <SignUpButton
        class="submit"
        id="signup-submit"
        name="signup-submit"
        data-event="patient-signup"
        data-signup-type="email"
      >
        Sign up
      </SignUpButton>
      <Footer>
        Already have an account?{" "}
        <a id="login-link" name="login-link">
          Log in
        </a>
      </Footer>
    </>
  );
};
export default Form;
