import React from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";

const HEIGHT = "100px";

const Layout = styled.div`
  border-radius: 15px 15px 0 0;
  background-color: rgb(46, 202, 127);
  height: ${HEIGHT};
  width: 100%;
  top: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Label = styled.label`
  display: block;
  color: white;
  line-height: ${HEIGHT};
  font-size: 30px;
`;

const BookingButton = styled(Button)`
  height: 50%;
`;

const BookingDetails = ({ doctor, date, time, onBooingClick }) => {
  return (
    <Layout>
      <Label>{doctor}</Label>
      <Label>{date}</Label>
      <Label>{time}</Label>
      <BookingButton onClick={onBooingClick}>Booking</BookingButton>
    </Layout>
  );
};
export default BookingDetails;
