import React from "react";
// import { Button, Upload, Avatar, Col, Row } from "antd";
// import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const Layout = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
`;

export const FormItem = styled.div`
  /* width: auto; */
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-end;
  align-items: ${(props) => (props.healthCondition ? {} : "center")};
  font-size: 15px;
  margin-bottom: 10px;
  margin-right: 30%;
`;

export const Label = styled.label`
  padding-top: 10px;
  margin-right: 10px;
  font-weight: 700;
`;

export const FormInput = styled.input`
  width: 50%;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 10px;

  /* margin-left: 5px; */
  :hover {
    border: 1px solid #01a4b7;
  }
`;

export const HealthCondition = styled.textarea`
  width: 50%;
  height: 100px;
  border: 1px solid gray;
  border-radius: 5px;
  padding-left: 10px;
  margin-top: 10px;

  :hover {
    border: 1px solid #01a4b7;
  }
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
