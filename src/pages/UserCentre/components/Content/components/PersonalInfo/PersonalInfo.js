import React from "react";
import LoadingSpin from "../../../../../../components/LoadingSpin";
import PatientInfoForm from "./components/PatientInfoForm";
import DoctorInfoForm from "./components/DoctorInfoForm";
import getUserInfo from "../../../../../../utils/getUserInfo";

const role = localStorage.getItem("ROLE");
class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined,
      role: undefined,
    };
  }

  componentDidMount() {
    getUserInfo().then((data) => {
      this.setState({
        role,
        data,
        loading: false,
      });
    });
  }

  render() {
    const { loading, data, role } = this.state;

    return (
      <>
        {loading ? (
          <LoadingSpin />
        ) : role === "ROLE_DOCTOR" ? (
          <DoctorInfoForm data={data} />
        ) : (
          <PatientInfoForm data={data} />
        )}
      </>
    );
  }
}

export default PersonalInfo;
