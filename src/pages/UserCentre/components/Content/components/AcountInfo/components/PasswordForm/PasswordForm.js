import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Form, Input, Row, Col } from "antd";

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-top: 0;
`;
const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 0,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};

const StyledButton = styled.button`
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
  /* width: 135%; */
  padding: 25px;
  align-items: center;
  justify-content: center;
`;

const StyledDiscription = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 30px;
  span {
    color: red;
  }
`;

function PasswordForm(props) {
  const {
    username,
    PasswordResetStatus,
    onPasswordReset,
    onFinish,
    onNewFinish,
    PasswordResetResult,
  } = props;

  const SuccessMessage = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: green;
  `;

  const resetPasswordResult = PasswordResetResult ? (
    <SuccessMessage>Password reset success!</SuccessMessage>
  ) : null;

  switch (PasswordResetStatus) {
    case "show":
      return (
        <>
          <Title>Account Information</Title>
          <Row justify="center">
            <Col offset={0}>
              <StyledDiscription>
                <span>{`Username: `}</span>
                {username}
              </StyledDiscription>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <StyledButton onClick={onPasswordReset}>
                Reset Your Password
              </StyledButton>
            </Col>
          </Row>
        </>
      );
    case "reset":
      return (
        <>
          <Title>Account Information</Title>
          <Row justify="center">
            <Col offset={0} span={12}>
              <StyledDiscription>
                <span>{`Username: `}</span>
                {username}
              </StyledDiscription>
            </Col>
          </Row>
          <Row justify="center">
            <Col offset={0} span={12}>
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  label="Current Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your current password!",
                    },
                  ]}
                >
                  <Input.Password defaultValue={""} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <StyledButton type="primary" htmlType="submit">
                    Submit
                  </StyledButton>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </>
      );
    case "new":
      return (
        <>
          <Title>Account Information</Title>
          <Row justify="center">
            <Col offset={0} span={12}>
              <StyledDiscription>
                <span>{`Username: `}</span>
                {username}
              </StyledDiscription>
            </Col>
          </Row>
          <Row justify="center">
            <Col offset={0} span={12}>
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onNewFinish}
              >
                <Form.Item
                  label={`New Password   `}
                  name="newpassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input your new password!",
                    },
                    {
                      min: 8,
                      message: "Password must be minimum 8 characters.",
                    },
                  ]}
                >
                  <Input.Password defaultValue={""} />
                </Form.Item>
                <Form.Item
                  label="Confirm Password"
                  name="confirmpassword"
                  rules={[
                    {
                      required: true,
                      message: "Please Confirm your new password!",
                    },
                    {
                      min: 8,
                      message: "Password must be minimum 8 characters.",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("newpassword") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "The two passwords that you entered do not match!"
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password defaultValue={""} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <StyledButton type="primary" htmlType="submit">
                    Submit
                  </StyledButton>
                </Form.Item>
                {resetPasswordResult}
              </Form>
            </Col>
          </Row>
        </>
      );
    case "wrong":
      return (
        <>
          <Title>Account Information</Title>
          <Row justify="center">
            <Col offset={0} span={12}>
              <StyledDiscription>
                <span>{`Username: `}</span>
                {username}
              </StyledDiscription>
            </Col>
          </Row>
          <Row justify="center">
            <Col offset={0} span={12}>
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  label="Current Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your current password!",
                    },
                  ]}
                >
                  <Input.Password defaultValue={""} />
                </Form.Item>
                <Row
                  gutter={[24, 24]}
                  justify="center"
                  style={{ color: "red" }}
                >
                  Incorrect Password! Please enter again!
                </Row>
                <Form.Item {...tailLayout}>
                  <StyledButton type="primary" htmlType="submit">
                    Submit
                  </StyledButton>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </>
      );
    default:
  }
}

export default PasswordForm;
