import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

describe("<Title />", () => {
  it("renders", () => {
    const wrapper = shallow(<Title />);

    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });
});
