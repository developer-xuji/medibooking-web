import React from "react";
import ManageBookingContent from "./components/ManageBookingContent";

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
  render() {
    return <ManageBookingContent bookings={bookingItemList} />;
  }
}

export default ManageBookings;
