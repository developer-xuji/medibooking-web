import React from "react";
import styled from "styled-components";
import BookingDetails from "./components/BookingDetails";
import TimeSelector from "./components/TimeSelector";
import DoctorSelector from "./components/DoctorSelector";
import DateSelector from "./components/DateSelector";
import addAppointment from "../../utils/addAppointment";
import getPatientInfo from "../../utils/getPatientInfo";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  align-items: center;
  margin: 50px auto;
  border-radius: 15px;
  box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.3);
`;

const SelectArea = styled.div`
  width: 100%;
  border-radius: 0 0 0 15px;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 100%;
  & ~ & {
    margin: 20px 0;
  }
`;
const Note = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  textarea {
    min-height: 100px;
  }
`;

const TextArea = styled.textarea`
  height: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
`;

class BookingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctor: null,
      date: "",
      startTime: "",
      endTime: "",
      notes: "",
      errorMessage: "",
    };
    this.handleBookingClick = this.handleBookingClick.bind(this);
    this.handleTimeSelector = this.handleTimeSelector.bind(this);
    this.handleDoctorSelector = this.handleDoctorSelector.bind(this);
    this.handleDateSelector = this.handleDateSelector.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
  }

  handleBookingClick() {
    this.setErrorMessage("");
    if (localStorage.getItem("ROLE") === "ROLE_PATIENT") {
      const { date, startTime, doctor, endTime, notes } = this.state;
      const appointment = {
        date: date,
        startingTime: startTime,
        endingTime: endTime,
        notes: notes,
        isCancelled: false,
        patient: localStorage.getItem("USER_ID"),
        doctor: doctor === null ? null : doctor.id,
      };

      doctor === null || date === "" || startTime === "" || endTime === ""
        ? this.setErrorMessage("Invalid Appointment Details")
        : addAppointment(appointment);
      //getPatientInfo(1);
    } else
      this.setErrorMessage(
        "Only patients can make appointments after logged in"
      );
  }

  handleTimeSelector(key) {
    return (event) => {
      this.setState({
        [key]: event.target.value,
        endTime: event.target.value,
      });
    };
  }

  handleDoctorSelector(key) {
    return (value) => {
      this.setState({
        [key]: value,
      });
    };
  }

  handleDateSelector(key) {
    return (value) => {
      this.setState({
        [key]: value.format("YYYY-MM-DD"),
      });
    };
  }

  handleNoteChange(event) {
    this.setState({
      notes: event.target.value,
    });
  }

  setErrorMessage(message) {
    this.setState({
      errorMessage: message,
    });
  }

  render() {
    const { doctor, date, startTime, errorMessage } = this.state;
    const SELECTORS = [
      {
        key: "doctor_selector",
        selector: (
          <DoctorSelector
            title="Select Doctor"
            selected={
              doctor === null ? "" : doctor.firstName + " " + doctor.lastName
            }
            onSelect={this.handleDoctorSelector("doctor")}
          />
        ),
      },
      {
        key: "date_selector",
        selector: (
          <DateSelector
            title="Select Date"
            onSelect={this.handleDateSelector("date")}
          />
        ),
      },
      {
        key: "time_selector",
        selector: (
          <TimeSelector
            title="Select Time "
            onSelect={this.handleTimeSelector("startTime")}
          />
        ),
      },
    ];
    return (
      <Layout>
        <BookingDetails
          doctor={doctor}
          date={date}
          time={startTime}
          onBooingClick={this.handleBookingClick}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <SelectArea>
          {SELECTORS.map((s) => (
            <Section key={s.key}>{s.selector}</Section>
          ))}
          <Note>
            <h3>Notes</h3>
            <TextArea onChange={(e) => this.handleNoteChange(e)} />
          </Note>
        </SelectArea>
      </Layout>
    );
  }
}

export default BookingPage;
