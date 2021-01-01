import React from "react";
import { shallow } from "enzyme";
import Specialists from "./Specialists";
import Title from "../Title";

describe("<Specialists />", () => {
  it("renders", () => {
    const wrapper = shallow(<Specialists />);

    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.children().children().children()).toHaveLength(7);
  });
});
