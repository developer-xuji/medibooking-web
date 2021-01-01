import React from "react";
import { shallow } from "enzyme";
import DataAds from "./index";
import DataCard from "./DataCard";

describe("<DataAds />", () => {
  it("renders", () => {
    const wrapper = shallow(<DataAds />);

    expect(wrapper.find(DataCard)).toHaveLength(4);
  });
});
