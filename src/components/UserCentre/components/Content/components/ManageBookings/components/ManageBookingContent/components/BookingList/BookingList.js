import React from "react";
import BookingItem from "./components/BookingItem";

class BookingList extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const sortMethod = this.props.sortMethod;

    const rows = [];

    const listAfterSearch = this.props.bookings.filter(({ doctorName }) =>
      doctorName.toLowerCase().includes(filterText.toLowerCase())
    );

    if (sortMethod === "byName") {
      listAfterSearch.sort((a, b) => a.doctorName.localeCompare(b.doctorName));
    }
    if (sortMethod === "byDateNew") {
      listAfterSearch.sort((a, b) => b.date.localeCompare(a.date));
    }
    if (sortMethod === "byDateOld") {
      listAfterSearch.sort((a, b) => a.date.localeCompare(b.date));
    }

    listAfterSearch.forEach(
      ({
        doctorName,
        doctorPicture,
        specialisation,
        date,
        startingTime,
        endingTime,
        notes,
      }) => {
        rows.push(
          <BookingItem
            doctorName={doctorName}
            doctorPicture={doctorPicture}
            date={date}
            specialisation={specialisation}
            startingTime={startingTime}
            endingTime={endingTime}
            notes={notes}
          />
        );
      }
    );

    return <div className="bookingList">{rows}</div>;
  }
}
export default BookingList;
