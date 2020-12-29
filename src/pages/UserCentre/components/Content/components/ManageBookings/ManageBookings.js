import React from "react";
import ManageBookingContent from "./components/ManageBookingContent";
import styled from "styled-components";
import Layout from "antd/lib/layout/layout";
import getAuth from "../../../../../../apis/getAuth";
import getAppointments from "../../../../../../utils/getAppointments";
import fetchData from "../../../../../../apis/fetchData";
import LoadingSpin from "../../../../../../components/LoadingSpin";
import { Empty } from "antd";

const role = localStorage.getItem("ROLE");

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-top: 0;
`;

const NoBookings = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TOKEN = localStorage.getItem("JWT_TOKEN");

class ManageBookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      bookingItemList: [],
    };
  }

  componentDidMount() {
    getAppointments().then((data) => {
      console.log("DATA: ", data);

      const bookingItemList = data.map((v) => ({
        ...v,
        doctorName: `${v.doctorFirstName} ${v.doctorLastName}`,
        patientName: `${v.patientFirstName} ${v.patientLastName}`,
        startingTime: v.startingTime.slice(0, -3),
        doctorIcon: `https://medibookingbucket.s3-ap-southeast-2.amazonaws.com/DoctorsImage/IMG_${v.doctor}.jpg`,
      }));
      this.setState({
        bookingItemList,
        loading: false,
        role,
      });
    });
  }

  render() {
    const { bookingItemList, loading } = this.state;
    console.log(bookingItemList);
    return (
      <>
        {loading ? (
          <LoadingSpin />
        ) : bookingItemList.length < 1 ? (
          <NoBookings>
            <Empty description={"There is currently no bookings."} />
          </NoBookings>
        ) : (
          <Layout>
            <Title>Manage Bookings</Title>
            <ManageBookingContent bookings={bookingItemList} />
          </Layout>
        )}
      </>
    );
  }
}

export default ManageBookings;
