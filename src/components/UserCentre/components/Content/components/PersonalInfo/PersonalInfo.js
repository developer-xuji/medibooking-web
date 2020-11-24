import React from "react";
import {
  Layout,
  FormItem,
  Label,
  FormInput,
  HealthCondition,
  Title,
  Submit,
} from "../styling";

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
        <FormItem>
          <Label>First Name:</Label>
          <FormInput type="text" defaultValue={this.state.firstName} />
        </FormItem>
        <FormItem>
          <Label>Last Name:</Label>
          <FormInput type="text" defaultValue={this.state.lastName} />
        </FormItem>
        <FormItem>
          <Label>Age:</Label>
          <FormInput type="int" defaultValue={this.state.age} />
        </FormItem>
        <FormItem>
          <Label>Phone:</Label>
          <FormInput type="text" defaultValue={this.state.phone} />
        </FormItem>
        <FormItem>
          <Label>Email:</Label>
          <FormInput type="text" defaultValue={this.state.email} />
        </FormItem>

        <FormItem healthCondition>
          <Label>Health Condition:</Label>

          <HealthCondition
            defaultValue={this.state.healthCondition}
            onChange={this.handleChange}
          />
        </FormItem>

        <Submit type="submit" value="Save" />
      </Layout>
    );
  }
}

export default PersonalInfo;
