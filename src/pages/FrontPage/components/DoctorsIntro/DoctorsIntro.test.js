import React from "react";
import { shallow } from "enzyme";
import DoctorsIntro from "./index";
import Gallary from "./Gallary";

describe("<DoctorsIntro />", () => {
  it("renders", () => {
    const wrapper = shallow(<DoctorsIntro />);

    expect(wrapper.find(Gallary)).toHaveLength(1);
  });
});
