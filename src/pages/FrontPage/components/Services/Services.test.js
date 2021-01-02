import React from "react";
import { shallow } from "enzyme";
import Services from "./Services";
import ServiceCard from "./components/ServiceCard";
import TitleArea from "../TitleArea";

describe("<Services />", () => {
  it("renders", () => {
    const wrapper = shallow(<Services />);

    expect(wrapper.find(ServiceCard)).toHaveLength(6);
    expect(wrapper.find(TitleArea)).toHaveLength(1);
  });
});
