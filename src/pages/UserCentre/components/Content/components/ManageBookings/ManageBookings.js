import React from "react";
import ManageBookingContent from "./components/ManageBookingContent";
import styled from "styled-components";
import Layout from "antd/lib/layout/layout";
import getAuth from "../../../../../../apis/getAuth";
import sendRestfulApi from "../../../../../../apis/sendRestfulApi";

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-top: 0;
`;

const TOKEN = localStorage.getItem("JWT_TOKEN");

const bookingItemList = [
  {
    doctorName: "Dhanushka Algama",
    doctorPicture:
      "https://www.medicalone.com.au/sites/default/files/styles/square_500x500_/public/doctor_photos/Dr%20Dan%20Cropped.jpg?itok=HFS7Kp83",
    specialisation: "Dentistry",
    date: "2020-01-01",
    startingTime: "10:15",
    endingTime: "12:45",
    notes: "The notes which the patient left for the doctor",
  },
  {
    doctorName: "Niv Sharma",
    doctorPicture:
      "https://www.medicalone.com.au/sites/default/files/styles/square_500x500_/public/doctor_photos/Dr%20Niv%20Sharma%20-%20Cropped.jpg?itok=JKLRI-bR",
    specialisation: "Optometry",
    date: "2020-02-01",
    startingTime: "09:15",
    endingTime: "12:45",
    notes: "The notes which the patient left for the doctor",
  },
  {
    doctorName: "Lucy Rowlands",
    doctorPicture:
      "https://www.medicalone.com.au/sites/default/files/styles/square_500x500_/public/doctor_photos/Lucy%20Rowland%20VG%20cropped.jpg?itok=_7eHsDUD",
    specialisation: "Audiology",
    date: "2020-11-12",
    startingTime: "14:00",
    endingTime: "16:00",
    notes: "The notes which the patient left for the doctor",
  },
];

class ManageBookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      bookingItemList: [],
      role: undefined,
    };
  }

  componentDidMount() {
    getAuth({ token: TOKEN })
      .then((response) => {
        // console.log(response.data);
        const { accountId, grantedAuthorities } = response.data;
        const { authority } = grantedAuthorities[0];
        const role = authority === "ROLE_DOCTOR" ? "doctor" : "patient";
        const getIdUrl = `http://localhost:8080/${role}s/search?accountId=${accountId}`;
        this.setState({
          role,
        });
        sendRestfulApi(getIdUrl, "GET").then((response) => {
          const { id } = response;
          const getAppointmentsUrl = `http://localhost:8080/management/appointments/search?${role}Id=${id}`;
          sendRestfulApi(getAppointmentsUrl, "GET").then((response) => {
            console.log("appointments", response);
          });
        });
      })
      .catch(() => {});
  }

  render() {
    return (
      <Layout>
        <Title>Manage Bookings</Title>

        <ManageBookingContent bookings={bookingItemList} />
      </Layout>
    );
  }
}

export default ManageBookings;
