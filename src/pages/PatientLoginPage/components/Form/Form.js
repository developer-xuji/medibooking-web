import React from "react";
import styled from "styled-components";
import DividingLine from "../../../SignUpPage/components/Form/components/DividingLine";
import Input from "../../../SignUpPage/components/Form/components/Input";
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
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required="required"
          dataParsleyRequiredMessage="Please enter a password"
          minlength="10"
          data-parsley-minlenth-message="Passwords must be 10 characters or more, and not a common well known password"
          autocomplete="off"
        />
        <SubmitButton
          class="submit"
          id="signup-submit"
          name="signup-submit"
          data-event="patient-signup"
          data-signup-type="email"
        >
          Log in
        </SubmitButton>
      </form>
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
