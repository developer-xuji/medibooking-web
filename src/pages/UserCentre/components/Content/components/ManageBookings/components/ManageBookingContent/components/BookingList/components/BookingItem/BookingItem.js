// this is the file item component for the file management page
import React from "react";
import styled from "styled-components";

const DoctorAvatar = styled.img`
  height: 100px;
  width: 100px;
`;

const Container = styled.div`
  border-bottom: 1px solid #959595;
`;

const Booking = styled.div`
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconAndInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const Options = styled.div``;
const Button = styled.button`
  cursor: pointer;
  font-size: 18px;
  color: black;
  width: 80%;
  background-color: transparent;
  border: 0.5px solid #c2c0c0;
  margin: 7px;
  border-radius: 15px;
  &:hover {
    background-color: ${(props) => (props.cancel ? "#ff5c33" : "#008fb4")};

    color: white;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  /* justify-content: space-between; */
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
  max-width: 25vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: 5px;
`;

const DateAndTime = styled.div`
  font-size: 18px;
  font-weight: 400;
  padding-top: 5px;
`;

const Date = styled.span`
  font-weight: 600;
  color: #000080;
`;
const Time = styled.span`
  padding-left: 10px;
  font-weight: 500;
  color: #ffa07a;
`;

const Specialisation = styled.div`
  padding-top: 3px;
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 5px;
  color: #01a4b7;
  span {
    color: black;
  }
`;
const BookingItem = ({
  doctorName,
  startingTime,
  endingTime,
  date,
  doctorPicture,
  specialisation,
  notes,
}) => (
  <Container>
    <Booking>
      <IconAndInfo>
        <DoctorAvatar src={doctorPicture} />

        <Info>
          <Name>{doctorName}</Name>
          <Specialisation>
            <span>Specialisation: </span>
            {`${specialisation}`}
          </Specialisation>

          <DateAndTime>
            <Date>{`${date}`}</Date>
            <Time>{`${startingTime} to ${endingTime}`}</Time>
          </DateAndTime>
        </Info>
      </IconAndInfo>

      <Options>
        <Button> Detail</Button>
        <Button cancel> Cancel</Button>
      </Options>
    </Booking>
  </Container>
);

export default BookingItem;
