import React from "react";
import { shallow } from "enzyme";
import FrontPage from "./FrontPage";
import Services from "./components/Services";
import DataAds from "./components/DataAds";
import DoctosIntro from "./components/DoctorsIntro";
import CustomerResponse from "./components/CustomerResponse";

describe("</>", () => {
  it("renders", () => {
    const wrapper = shallow(<FrontPage />);

    expect(wrapper.find(Services)).toHaveLength(1);
    expect(wrapper.find(DataAds)).toHaveLength(1);
    expect(wrapper.find(DoctosIntro)).toHaveLength(1);
    expect(wrapper.find(CustomerResponse)).toHaveLength(1);
  });
});
