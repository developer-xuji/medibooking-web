import React from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";

const HEIGHT = "140px";

const Layout = styled.div`
  border-radius: 15px 15px 0 0;
  background-color: #5b7189;
  min-height: ${HEIGHT};
  width: 100%;
  top: 0;
  padding: 30px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans", sans-serif;

  @media screen and (max-width: 680px) {
    justify-content: center;
  }
`;

const Label = styled.label`
  display: block;
  color: white;
  line-height: ${HEIGHT} / 3;
  font-size: 30px;

  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;

const InfoArea = styled.div`
  display: flex;

  p {
    color: white;
    margin-right: 42px;
  }
`;

const BookingButton = styled(Button)`
  height: 60%;
  font-size: 18px;
  width: 180px;
`;

const BookingDetails = ({ doctor, date, time, onBooingClick }) => {
  return (
    <Layout>
      <InfoArea>
        <p>
          Meet with
          <Label>
            {doctor === null ? "" : doctor.firstName + " " + doctor.lastName}
          </Label>
        </p>
        <p>
          Scheduled on
          <Label>
            {date} {time}
          </Label>
        </p>
      </InfoArea>
      <BookingButton onClick={onBooingClick}>Booking</BookingButton>
    </Layout>
  );
};
export default BookingDetails;
