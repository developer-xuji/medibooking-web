import React from "react";
import { shallow } from "enzyme";
import BookingDetails from "./BookingDetails";

const doctor = {
  firstName: "firstName",
  lastName: "lastName",
};
const date = "date";
const time = "time";
const onBookingClick = jest.fn();

describe("<BookingDetails />", () => {
  it("renders if doctor is null", () => {
    const wrapper = shallow(
      <BookingDetails
        doctor={null}
        date={date}
        time={time}
        onBooingClick={onBookingClick}
      />
    );

    expect(onBookingClick).not.toBeCalled();
    wrapper.children().at(1).simulate("click");
    expect(onBookingClick).toBeCalled();
  });

  it("renders if doctor is not null", () => {
    const wrapper = shallow(
      <BookingDetails
        doctor={doctor}
        date={date}
        time={time}
        onBooingClick={onBookingClick}
      />
    );

    expect(onBookingClick).not.toBeCalled();
    wrapper.children().at(1).simulate("click");
    expect(onBookingClick).toBeCalled();
  });
});
