import React from "react";
import {
  Layout,
  FormItem,
  Label,
  FormInput,
  HealthCondition,
  Title,
  Submit,
} from "../../../styling";

const PatientInfoForm = ({ data, handleSubmit }) => (
  <Layout onSubmit={handleSubmit}>
    <Title>Personal Information</Title>
    <FormItem>
      <Label>First Name:</Label>
      <FormInput type="text" defaultValue={data.firstName} />
    </FormItem>
    <FormItem>
      <Label>Last Name:</Label>
      <FormInput type="text" defaultValue={data.lastName} />
    </FormItem>
    <FormItem>
      <Label>Age:</Label>
      <FormInput type="int" defaultValue={data.age} />
    </FormItem>
    <FormItem>
      <Label>Phone:</Label>
      <FormInput type="text" defaultValue={data.phone} />
    </FormItem>
    <FormItem>
      <Label>Email:</Label>
      <FormInput type="text" defaultValue={data.email} />
    </FormItem>

    <FormItem healthCondition>
      <Label>Health Condition:</Label>

      <HealthCondition
        defaultValue={data.healthCondition}
        // onChange={this.handleChange}
      />
    </FormItem>

    <Submit type="submit" value="Save" />
  </Layout>
);

export default PatientInfoForm;
