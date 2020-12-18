import React from "react";
import getAuth from "../../../../../../apis/getAuth";
import sendRestfulApi from "../../../../../../apis/sendRestfulApi";
import PatientInfoForm from "./components/PatientInfoForm";
import DoctorInfoForm from "./components/DoctorInfoForm";
import fetchData from "../../../../../../apis/fetchData";

const TOKEN = localStorage.getItem("JWT_TOKEN");
class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined,
      role: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    getAuth({ token: TOKEN })
      .then((response) => {
        console.log(response.data);
        const { accountId, grantedAuthorities } = response.data;
        const { authority } = grantedAuthorities[0];
        const role = authority === "ROLE_DOCTOR" ? "doctors" : "patients";
        const url = `/${role}/search`;
        const param = { name: "accountId", value: accountId };
        this.setState({
          role,
        });
        fetchData(url, param).then((data) => {
          console.log(data);
          this.setState({
            data,
            loading: false,
          });
        });
      })
      .catch(() => {});
  }

  handleChange(event) {
    this.setState({ healthCondition: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { loading, data, role } = this.state;

    console.log(data);
    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : // <Layout onSubmit={this.handleSubmit}>
        //   <Title>Personal Information</Title>
        //   <FormItem>
        //     <Label>First Name:</Label>
        //     <FormInput type="text" defaultValue={data.firstName} />
        //   </FormItem>
        //   <FormItem>
        //     <Label>Last Name:</Label>
        //     <FormInput type="text" defaultValue={data.lastName} />
        //   </FormItem>
        //   <FormItem>
        //     <Label>Age:</Label>
        //     <FormInput type="int" defaultValue={data.age} />
        //   </FormItem>
        //   <FormItem>
        //     <Label>Phone:</Label>
        //     <FormInput type="text" defaultValue={data.phone} />
        //   </FormItem>
        //   <FormItem>
        //     <Label>Email:</Label>
        //     <FormInput type="text" defaultValue={data.email} />
        //   </FormItem>

        //   <FormItem healthCondition>
        //     <Label>Health Condition:</Label>

        //     <HealthCondition
        //       defaultValue={data.healthCondition}
        //       onChange={this.handleChange}
        //     />
        //   </FormItem>

        //   <Submit type="submit" value="Save" />
        // </Layout>
        role === "doctors" ? (
          <DoctorInfoForm data={data} />
        ) : (
          <PatientInfoForm data={data} />
        )}
      </div>
    );
  }
}

export default PersonalInfo;
