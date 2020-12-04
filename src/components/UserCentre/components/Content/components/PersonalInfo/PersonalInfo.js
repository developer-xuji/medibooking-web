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

const STUDENT_TOKEN =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdHVkZW50IiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfU1RVREVOVCJ9XSwiaWF0IjoxNjA3MDA0NTg0LCJleHAiOjE2MDc4NjQ0MDB9.kKAGxCNo6xyWpYiVbTuHUw-OriD1uS9qbuXx84mJlO91R5bOgC5mdSO5TpXaRzVKLlayvx-jAUL5E8cufERC8A";


const ADMIN_TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJzdHVkZW50OndyaXRlIn0seyJhdXRob3JpdHkiOiJzdHVkZW50OnJlYWQifSx7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sImlhdCI6MTYwNzA2NDI0MywiZXhwIjoxNjA3ODY0NDAwfQ.UKn308DCiHMszQV70YjxxmS5zX870m6qCt7HiBNGhbZEaRcXZn2JXXpb7NsDKeHy3zi1CsG_q5WINYhxcuzvjQ"

const URL = "http://localhost:8080/api/v1/students/1";
class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined,

      // firstName: undefined,
      // lastName: undefined,
      // age: undefined,
      // phone: undefined,
      // email: undefined,
      // healthCondition: undefined,

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
  // componentDidMount = async () => {
  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   };
  //   await fetch(
  //     url.backendUrl + "/user/info/basic/" +
  //       sessionStorage.getItem("username"),
  //     requestOptions
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.success === false) {
  //         setTimeout(() => {}, 300);
  //       } else {
  //         const data = res.data;
  //         var dob = null;
  //         if (data.dob) {
  //           dob = new Date(data.dob);
  //         }
  //         this.setState({
  //           name: data.name,
  //           dob: dob,
  //           phone: data.phone,
  //           email: data.email,
  //           intro: data.self_intro,
  //         });
  //       }
  //     });
  // };

  componentDidMount() {
    this.getPersonalInfo().then((data) => {
      this.setState({
        data,
        loading: false,
      });
    });
    console.log(this.state.data);
  }

  async getPersonalInfo() {
    // const myHeaders = new Headers();
    // const bearer = "Bearer " + STUDENT_TOKEN;
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", bearer);
  


    const response = await fetch(URL, {
      // method: "GET",
      mode: "cors",
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        'Authorization': `Bearer ${STUDENT_TOKEN}`,
      },
    })
    const data = await response.json();
    console.log(data);
  
  };

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
