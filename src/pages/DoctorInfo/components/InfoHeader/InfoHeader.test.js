import React from "react";
import { shallow } from "enzyme";
import InfoHeader from "./index";
import { Link } from "react-router-dom";

describe("<InfoHeader />", () => {
  it("renders", () => {
    const wrapper = shallow(<InfoHeader />);

    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
