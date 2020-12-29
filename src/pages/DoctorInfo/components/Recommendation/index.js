import React from "react";
import styled from "styled-components";

import DoctorCard from "./DoctorCard";
import getDoctors from "../../../../utils/getDoctors";

const Layout = styled.div`
  margin: 36px 0;
  width: 25%;

  h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 24px;
    opacity: 0.7;
    text-align: left;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 12px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
class Recommendation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorList: [],
    };
  }

  componentDidMount() {
    getDoctors().then((response) => {
      response = response.filter(
        (doctor) =>
          doctor.id !== this.props.doctorID &&
          doctor.specializations.filter(
            (specialization) =>
              specialization.id === this.props.specializationID
          ).length > 0
      );
      this.setState({
        doctorList: response,
      });
    });
  }

  render() {
    const { doctorList } = this.state;
    return (
      <Layout>
        {doctorList.length === 0 ? (
          <></>
        ) : (
          <>
            <h1>Similar Doctors</h1>
            <CardContainer>
              {doctorList.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  id={doctor.id}
                  firstName={doctor.firstName}
                  lastName={doctor.lastName}
                  gender={doctor.gender}
                />
              ))}
            </CardContainer>{" "}
          </>
        )}
      </Layout>
    );
  }
}

export default Recommendation;
