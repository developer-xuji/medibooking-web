import React from "react";
import styled, { keyframes } from "styled-components";
import 'antd/dist/antd.css';
import { Form, Input, Button, Descriptions, Row, Col } from 'antd';


const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 16,
    },
  };

function PasswordForm(props) {
    
    const {
        username,
        PasswordResetStatus,
        onPasswordReset,
        onFinish,
        onNewFinish,
    } = props;


    switch (PasswordResetStatus) {
        case "show":
            return (
                <>
                    <Row justify="center">
                        <Col offset={6} >
                            <Descriptions title="Account Info">
                                <Descriptions.Item label="UserName">{username}</Descriptions.Item>
                            </Descriptions>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col>
                            <Button onClick={onPasswordReset}>Reset Your Password</Button>
                        </Col>
                    </Row>
                </>
            );
            break;
        case "reset":
            return (
                <>
                    <Row justify="center">
                        <Col offset={0}  span={12}>
                            <Descriptions title="Account Info">
                                <Descriptions.Item label="UserName">{username}</Descriptions.Item>
                            </Descriptions>
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
                                        message: 'Please input your current password!',
                                    },
                                    ]}
                                >
                                    <Input.Password defaultValue={""}/>
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                    Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </>
            );
            break;
        case "new":
            return (
                <>
                    <Row justify="center">
                        <Col offset={0} span={12}>
                            <Descriptions title="Account Info">
                                <Descriptions.Item label="UserName">{username}</Descriptions.Item>
                            </Descriptions>
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
                                    label="New Password"
                                    name="newpassword"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your new password!',
                                    },
                                    ]}
                                >
                                    <Input.Password defaultValue={""}/>
                                </Form.Item>
                                <Form.Item
                                    label="Confirm Password"
                                    name="confirmpassword"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please Confirm your new password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                          if (!value || getFieldValue('newpassword') === value) {
                                            return Promise.resolve();
                                          }
                                          return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                      }),
                                    ]}
                                >
                                    <Input.Password defaultValue={""}/>
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                    Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </>
            );
            break;
        case "wrong":
            return (
                <>    
                    <Row justify="center">
                        <Col offset={0} span={12}>
                            <Descriptions title="Account Info">
                                <Descriptions.Item label="UserName">{username}</Descriptions.Item>
                            </Descriptions>
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
                                        message: 'Please input your current password!',
                                    },
                                    ]}
                                >
                                    <Input.Password defaultValue={""}/>
                                </Form.Item>
                                <Row gutter={[24, 24]} justify="center" style={{color:"red"}}>Incorrect Password! Please enter again!</Row>
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                    Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </>
            );
            break;
    }

};

export default PasswordForm;
  