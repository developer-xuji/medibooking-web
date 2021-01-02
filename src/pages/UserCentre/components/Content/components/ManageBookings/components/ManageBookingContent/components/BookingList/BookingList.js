import React from "react";
import BookingItem from "./components/BookingItem";
const role = localStorage.getItem("ROLE");
class BookingList extends React.Component {
  render() {
    const { filterText, sortMethod, bookings } = this.props;
    let listAfterSearch = [];

    if (role === "ROLE_PATIENT") {
      listAfterSearch = bookings.filter(({ doctorName }) =>
        doctorName.toLowerCase().includes(filterText.toLowerCase())
      );
    } else {
      listAfterSearch = bookings.filter(({ patientName }) =>
        patientName.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    if (sortMethod === "byName") {
      role === "ROLE_PATIENT"
        ? listAfterSearch.sort((a, b) =>
            a.doctorName.localeCompare(b.doctorName)
          )
        : listAfterSearch.sort((a, b) =>
            a.patientName.localeCompare(b.patientName)
          );
    }
    if (sortMethod === "byDateNew") {
      listAfterSearch.sort(
        (a, b) =>
          b.date.localeCompare(a.date) ||
          b.startingTime.localeCompare(a.startingTime)
      );
    }
    if (sortMethod === "byDateOld") {
      listAfterSearch.sort(
        (a, b) =>
          a.date.localeCompare(b.date) ||
          a.startingTime.localeCompare(b.startingTime)
      );
    }

    return listAfterSearch.map((booking) => (
      <BookingItem key={booking.id} booking={booking} />
    ));
  }
}
export default BookingList;
