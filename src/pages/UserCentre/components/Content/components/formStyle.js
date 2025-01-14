import styled, { css } from "styled-components";
import { MOBILE_WIDTH } from "../../../../../constants";

export const Layout = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 15px;
  margin-bottom: 10px;
  margin-right: 30%;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Label = styled.label`
  margin-right: 10px;
  font-weight: 700;
`;

const FormItemStyle = css`
  width: 50%;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  :hover {
    border: 1px solid #01a4b7;
  }
`;

export const FormInput = styled.input`
  ${FormItemStyle};
`;

export const GenderSelector = styled.select`
  ${FormItemStyle};
`;

export const DoctorDescription = styled.textarea`
  ${FormItemStyle};
  height: 100px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-top: 0;
`;

export const Submit = styled.input`
  background: #01a4b7;
  display: flex;
  height: 50px;
  white-space: nowrap;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 48px;
  font-size: 20px;
  outline: none;
  font-weight: 600;
  user-select: none;
  align-items: center;
  justify-content: center;
  width: 35%;
  margin-top: 10px;
  margin-left: 35%;
`;
