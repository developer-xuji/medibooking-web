import React from "react";
import styled from "styled-components";
import { Button, DatePicker, version } from "antd";
// import "antd/dist/antd.css";
const Layout = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1``;
class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Yipeng",
      lastName: "Wang",
      age: 21,
      phone: "0479088345",
      email: "yipwang@unimelb.student.edu.au",
      healthCondition: "asndajsdnasdkalsdnaldn",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ healthCondition: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Layout onSubmit={this.handleSubmit}>
        <Title>Personal Information</Title>
        <label>
          First Name:
          <input type="text" value={this.state.firstName} />
        </label>
        <label>
          Last Name:
          <input type="text" value={this.state.lastName} />
        </label>
        <label>
          Age:
          <input type="int" value={this.state.age} />
        </label>
        <label>
          Phone:
          <input type="text" value={this.state.phone} />
        </label>
        <label>
          Email:
          <input type="text" value={this.state.email} />
        </label>
        <label>
          Health Condition:<br></br>
          <textarea
            value={this.state.healthCondition}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Save" />
      </Layout>
    );
  }
}

export default PersonalInfo;
