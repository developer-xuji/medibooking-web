import React from "react";
import styled from "styled-components";
import DividingLine from "../../../SignUpPage/components/Form/components/DividingLine";
import InputField from "../../../SignUpPage/components/Form/components/InputField";
import SubmitButton from "../../../SignUpPage/components/Form/components/SubmitButton";
import Footer from "../../../SignUpPage/components/Form/components/Footer";

const PracticeLoginLink = styled.div`
  border-top: 1px solid #e3e8ed;
  padding-top: 18px;
  margin-top: 18px;
`;

const Form = () => {
  return (
    <>
      <DividingLine />
      <form>
        <InputField
          type="text"
          id="username"
          name="username"
          placeholder="Username:"
          data-parsley-type-message="Please enter a valid username"
          required=""
          data-parsley-required-message="Please enter your username"
        />
        <InputField
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required="required"
          dataParsleyRequiredMessage="Please enter a password"
          minlength="10"
          dataParsleyMinlenthMessage="Passwords must be 10 characters or more, and not a common well known password"
          autocomplete="off"
        />
      </form>
      <SubmitButton
        class="submit"
        id="signup-submit"
        name="signup-submit"
        dataEvent="patient-signup"
        dataSignupType="email"
      >
        Log in
      </SubmitButton>
      <Footer>
        Don't have an account? Sign up
        <PracticeLoginLink>
          Are you a practice? Log in as a practice
        </PracticeLoginLink>
      </Footer>
    </>
  );
};
export default Form;
