import React from "react";
import {
  Layout,
  FormItem,
  Label,
  FormInput,
  DoctorDescription,
  GenderSelector,
  Title,
  Submit,
} from "../../../styling";
import MultiSelector from "./components/MultiSelector";

const DoctorInfoForm = ({ data, handleSubmit }) => (
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
      <Label for="gender">Gender:</Label>
      {/* <select id="gender" name="carlist" form="carform"> */}
      <GenderSelector id="gender" defaultValue={data.gender}>
        <option value="">----</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </GenderSelector>
    </FormItem>
    <FormItem>
      <Label>Phone:</Label>
      <FormInput type="text" defaultValue={data.phone} />
    </FormItem>
    <FormItem>
      <Label>Email:</Label>
      <FormInput type="text" defaultValue={data.email} />
    </FormItem>
    <FormItem>
      <Label>Languages:</Label>
      <MultiSelector category="languages" data={data.languages} />
    </FormItem>
    <FormItem>
      <Label>Specializations:</Label>
      <MultiSelector category="specializations" data={data.specializations} />
    </FormItem>
    <FormItem doctorDescription>
      <Label>Description:</Label>

      <DoctorDescription
        defaultValue={data.description}
        // onChange={this.handleChange}
      />
    </FormItem>

    <Submit type="submit" value="Save" />
  </Layout>
);

export default DoctorInfoForm;
