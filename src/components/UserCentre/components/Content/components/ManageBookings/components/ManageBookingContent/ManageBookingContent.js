import React from "react";
import SearchAndSortBar from "./components/SearchAndSortBar";
import BookingList from "./components/BookingList";

class ManageBookingContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      sortMethod: "byDefault",
    };
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText,
    });
  };

  handleSortChange = (sortMethod) => {
    this.setState({
      sortMethod: sortMethod,
    });
  };

  render() {
    return (
      <div>
        <SearchAndSortBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
          onSortChange={this.handleSortChange}
        />
        <BookingList
          bookings={this.props.bookings}
          filterText={this.state.filterText}
          sortMethod={this.state.sortMethod}
        />
      </div>
    );
  }
}

export default ManageBookingContent;
