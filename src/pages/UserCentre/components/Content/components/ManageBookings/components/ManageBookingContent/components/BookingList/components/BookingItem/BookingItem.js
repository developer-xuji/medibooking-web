// this is the file item component for the file management page
import React from "react";
import styled from "styled-components";
import avatar from "../../../../../../../../../../../../assets/images/avatar.png";
import cancelledImage from "../../../../../../../../../../../../assets/images/cancelled.png";
import AppointmentDetailModal from "../AppointmentDetailModal";
import cancelAppointment from "../../../../../../../../../../../../utils/cancelAppointment";
import { MOBILE_WIDTH } from "../../../../../../../../../../../../constants";

const role = localStorage.getItem("ROLE");
const Avatar = styled.img`
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
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    display: flex;
    flex-direction: column;
  }
`;

const IconAndInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    display: flex;
    flex-direction: column;
  }
`;

const Options = styled.div`
  width: 150px;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 18px;
  color: black;
  width: 80%;
  background-color: transparent;
  border: 0.5px solid #c2c0c0;
  margin: 7px;
  border-radius: 15px;
  outline: none;
  &:hover {
    background-color: ${(props) => (props.cancel ? "#ff5c33" : "#008fb4")};

    color: white;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
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
  color: #fc8368;
  span {
    color: black;
  }
`;

const Note = styled.div`
  padding-top: 10px;
  font-size: 15px;
  font-weight: 600;
  padding-bottom: 5px;

  color: black;
  max-width: 30vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  span {
    color: #01a4b7;
    padding-right: 2px;
  }
`;

const Cancelled = styled.img`
  position: absolute;
  width: 200px;
  height: 100px;
  left: 60%;
  z-index: 100;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    left: 30%;
  }
`;

const Expired = styled.div`
  position: absolute;
  width: 750px;
  height: 100px;
  pointer-events: none;
  z-index: 150;
  background-color: rgba(255, 255, 255, 0.5);
`;

class BookingItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetailModal: false,
    };
  }

  setShowDetailModal() {
    this.setState({ showDetailModal: true });
  }

  setCloseDetailModal() {
    this.setState({ showDetailModal: false });
  }

  handleOnCancelClick() {
    const bookinig = this.props.booking;
    cancelAppointment(bookinig.id).then(() => window.location.reload());
  }

  isExpired(booking) {
    var today = new window.Date();
    // var today = "2021-01-2010:30";

    const bookingDateTime = booking.date + booking.startingTime;
    // console.log("bookingDateTime", bookingDateTime);
    // console.log("today", today);
    // console.log(
    //   "today",
    //   today.toISOString().substring(0, 10) + today.toString().substring(16, 21)
    // );
    return (
      today.toISOString().substring(0, 10) +
        today.toString().substring(16, 21) >
      bookingDateTime
    );
    // return today > bookingDateTime;
  }

  render() {
    const { showDetailModal } = this.state;
    const { booking } = this.props;

    return (
      <Container>
        <Booking>
          <IconAndInfo>
            {role === "ROLE_PATIENT" ? (
              <Avatar src={booking.doctorIcon} />
            ) : (
              <Avatar src={avatar} />
            )}

            <Info>
              {role === "ROLE_PATIENT" ? (
                <Name>{booking.doctorName}</Name>
              ) : (
                <Name>{booking.patientName}</Name>
              )}

              <DateAndTime>
                <Date>{`${booking.date}`}</Date>
                <Time>
                  {booking.startingTime}
                  {/* <span>{` -- `}</span>
                  {booking.endingTime} */}
                </Time>
              </DateAndTime>

              <Note>
                <span>Appointment message:</span>
                {`${booking.notes}`}
              </Note>
            </Info>
          </IconAndInfo>

          <Options>
            <Button onClick={() => this.setShowDetailModal()}> Detail</Button>
            {!booking.isCancelled && !this.isExpired(booking) && (
              <Button cancel onClick={() => this.handleOnCancelClick()}>
                {" "}
                Cancel
              </Button>
            )}
          </Options>
          {booking.isCancelled && <Cancelled src={cancelledImage} />}
          {showDetailModal && (
            <AppointmentDetailModal
              onClose={() => this.setCloseDetailModal()}
              booking={booking}
            />
          )}
          {this.isExpired(booking) && <Expired />}
        </Booking>
      </Container>
    );
  }
}

export default BookingItem;
