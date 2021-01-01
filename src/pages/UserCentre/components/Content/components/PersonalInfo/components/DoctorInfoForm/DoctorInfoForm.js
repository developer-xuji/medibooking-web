import React from "react";
import setDoctorInfo from "../../../../../../../../utils/setDoctorInfo";
import {
  Layout,
  FormItem,
  Label,
  FormInput,
  DoctorDescription,
  GenderSelector,
  Title,
  Submit,
} from "../../../formStyle";
import MultiSelector from "./components/MultiSelector";

class DoctorInfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.data,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = this.state;
    updatedData.age = Number(updatedData.age);

    setDoctorInfo(updatedData).then((res) => {
      if (res.success === false) {
        setTimeout(() => {}, 300);
      } else {
        window.location.reload();
      }
    });
  };

  handleSelectorChange = (value, selector) => {
    selector === "languages"
      ? this.setState({
          languages: value,
        })
      : this.setState({
          specializations: value,
        });
  };

  render() {
    const {
      firstName,
      lastName,
      age,
      gender,
      languages,
      specializations,
      description,
    } = this.state;
    return (
      <Layout onSubmit={this.handleSubmit}>
        <Title>Personal Information</Title>
        <FormItem>
          <Label>First Name:</Label>
          <FormInput
            name="firstName"
            type="text"
            defaultValue={firstName}
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <Label>Last Name:</Label>
          <FormInput
            name="lastName"
            type="text"
            defaultValue={lastName}
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <Label>Age:</Label>
          <FormInput
            name="age"
            type="number"
            defaultValue={age}
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <Label>Gender:</Label>
          <GenderSelector
            name="gender"
            defaultValue={gender}
            onChange={this.handleChange}
          >
            <option value="">----</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </GenderSelector>
        </FormItem>

        <FormItem>
          <Label>Languages:</Label>
          <MultiSelector
            category="languages"
            data={languages}
            handleSelectorChange={this.handleSelectorChange}
          />
        </FormItem>
        <FormItem>
          <Label>Specializations:</Label>
          <MultiSelector
            category="specializations"
            data={specializations}
            handleSelectorChange={this.handleSelectorChange}
          />
        </FormItem>
        <FormItem doctorDescription>
          <Label>Description:</Label>

          <DoctorDescription
            name="description"
            defaultValue={description}
            onChange={this.handleChange}
          />
        </FormItem>

        <Submit type="submit" value="Save" />
      </Layout>
    );
  }
}

export default DoctorInfoForm;
