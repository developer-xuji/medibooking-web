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
import getAuth from "../../../../../../apis/getAuth";

const TOKEN = localStorage.getItem("JWT_TOKEN");
class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined,
      role: undefined,
      // firstName: "Yipeng",
      // lastName: "Wang",
      // age: 21,
      // phone: "0479088345",
      // email: "yipwang@unimelb.student.edu.au",
      // healthCondition: "asndajsdnasdkalsdnaldn",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    getAuth({ token: TOKEN })
      .then((response) => {
        const { accountId, grantedAuthorities } = response.data;
        const { authority } = grantedAuthorities[0];
        const role = authority === "ROLE_DOCTOR" ? "doctors" : "patients";
        const url = `http://localhost:8080/${role}/search?accountId=${accountId}`;
        this.setState({
          role,
        });
        this.getPersonalInfo(url).then((data) => {
          this.setState({
            data,
            loading: false,
          });
        });
      })
      .catch(() => {});
  }

  async getPersonalInfo(url) {
    const request = {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };

    return await fetch(url, request)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }

  handleChange(event) {
    this.setState({ healthCondition: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { loading, data, role } = this.state;

    console.log(data, role);
    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Layout onSubmit={this.handleSubmit}>
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
                onChange={this.handleChange}
              />
            </FormItem>

            <Submit type="submit" value="Save" />
          </Layout>
        )}
      </div>
    );
  }
}

export default PersonalInfo;
