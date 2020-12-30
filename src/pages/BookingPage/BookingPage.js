import React from "react";
import styled from "styled-components";
import BookingDetails from "./components/BookingDetails";
import TimeSelector from "./components/TimeSelector";
import DoctorSelector from "./components/DoctorSelector";
import DateSelector from "./components/DateSelector";
import addAppointment from "../../utils/addAppointment";
import getAppointmentByDoctorAndDate from "../../utils/getAppointmentByDoctorAndDate";
import { getRoutePath } from "../../utils/getRoute";
import getDoctorById from "../../utils/getDoctorById";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  align-items: center;
  margin: 50px auto;
  border-radius: 15px;
  box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.3);

  h3 {
    color: #5b7189;
    font-size: 24px;
  }
`;

const SelectArea = styled.div`
  width: 100%;
  border-radius: 0 0 0 15px;
  padding: 20px 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Note = styled.div`
  display: flex;
  flex-direction: column;
  margin: 36px 0;
`;

const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
  min-height: 100px;
  resize: none;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0.5rem;
  color: #666;
  font-style: normal;
  box-shadow: inset 0 0 0.25rem #ddd;
  &:focus {
    outline: none;
  }
  &[placeholder] { 
    font-style: italic;
    font-size: 0.875rem;
  }
`;

const Count = styled.div`
  width: 100%;
  text-align: right;
  padding: 0.3rem 0 0 0;
  font-size: 0.875rem;
  color: #5b7189;`

const ErrorMessage = styled.div`
  color: #cc0000;
  background-color: rgba(255, 0, 51, 0.2);
  padding: 12px 24px;
  margin-top: 12px;
`;

class BookingPage extends React.Component {
  constructor(props) {
    super(props);

    const addedDoctorId = this.props.match.params.DoctorsID;
    this.state = {
      doctor: null,
      addedDoctorId: addedDoctorId,
      date: "",
      startTime: "",
      endTime: "",
      notes: "",
      errorMessage: "",
      invalidAppointments: [],
      textCount: 0
    };
    this.handleSelector = this.handleSelector.bind(this);
    this.handleBookingClick = this.handleBookingClick.bind(this);
    this.handleTimeSelector = this.handleTimeSelector.bind(this);
    this.handleDoctorSelector = this.handleDoctorSelector.bind(this);
    this.handleDateSelector = this.handleDateSelector.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);

    if (addedDoctorId)
      getDoctorById(addedDoctorId).then((doctor) =>
        this.handleDoctorSelector(doctor)
      );
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
        : addAppointment(appointment).then(
          () =>
            (window.location.href = getRoutePath(
              "user_center/manageBookings"
            ))
        );

      // console.log("APPOINTMENT: ", appointment);
    } else
      this.setErrorMessage(
        "Only patients can make appointments after logged in"
      );
  }

  handleSelector(key) {
    switch (key) {
      case "doctor":
        return (doctor) => this.handleDoctorSelector(doctor);
      case "date":
        return (date) => this.handleDateSelector(date);
      case "time":
        return (event) => this.handleTimeSelector(event);
      default:
        return null;
    }
  }

  handleTimeSelector(event) {
    this.setState({
      startTime: event.target.value,
      endTime: event.target.value,
    });
  }

  setInvalidTime() {
    const { doctorId, date } = this.state;
    getAppointmentByDoctorAndDate(doctorId, date).then((appointmentList) => {
      this.setState({ invalidAppointment: appointmentList });
    });
  }

  handleDoctorSelector(doctor) {
    const { date } = this.state;
    getAppointmentByDoctorAndDate(doctor.id, date).then((appointmentList) => {
      this.setState({
        doctor: doctor,
        invalidAppointments: appointmentList,
      });

      if (appointmentList.filter((apmt) => apmt.startingTime.slice(0,5) == this.state.startTime).length > 0) {
        this.setState({
          startTime: "",
          endTime: "",
        })
      }     
    });
  }

  handleDateSelector(date) {
    const doctorId = this.state.doctor === null ? 0 : this.state.doctor.id;
    getAppointmentByDoctorAndDate(doctorId, date.format("YYYY-MM-DD"))
      .then((appointmentList) => {
        this.setState({
          date: date.format("YYYY-MM-DD"),
          invalidAppointments: appointmentList,
        });
        if (appointmentList.filter((apmt) => apmt.startingTime.slice(0,5) == this.state.startTime).length > 0) {
          this.setState({
            startTime: "",
            endTime: "",
          })
        }
      })
      .catch(() => {
        this.setState({
          date: date.format("YYYY-MM-DD"),
        });
      });
  }

  handleNoteChange(event) {
    this.setState({
      notes: event.target.value,
      textCount: event.target.value.length
    });
  }

  setErrorMessage(message) {
    this.setState({
      errorMessage: message,
    });
  }

  render() {
    const {
      doctor,
      addedDoctorId,
      date,
      startTime,
      errorMessage,
      invalidAppointments,
      textCount
    } = this.state;

    return (
      <Layout>
        <BookingDetails
          doctor={doctor}
          date={date}
          time={startTime}
          onBooingClick={this.handleBookingClick}
        />
        {errorMessage.length === 0? <></> : <ErrorMessage>{errorMessage}</ErrorMessage>}
        <SelectArea>
          <DoctorSelector
            title="Select Doctor"
            selected={
              doctor === null ? "" : doctor.firstName + " " + doctor.lastName
            }
            onSelect={this.handleSelector("doctor")}
            addedDoctorId={addedDoctorId}
          />
          <DateSelector
            title="Select Date"
            onSelect={this.handleSelector("date")}
          />
          <TimeSelector
            title="Select Time "
            onSelect={this.handleSelector("time")}
            doctorId={doctor === null ? "" : doctor.id}
            date={date}
            invalidAppointments={invalidAppointments}
          />
          <Note>
            <h3>Notes</h3>
            <TextArea onChange={(e) => this.handleNoteChange(e)} placeholder="Leave your notes..." maxLength={3000}/>
          <Count><span>{textCount} / 3000</span></Count>
          </Note>
        </SelectArea>
      </Layout>
    );
  }
}

export default BookingPage;
