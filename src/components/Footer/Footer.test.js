import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import Specialists from "./Components/Specialists";
import Contact from "./Components/Contact";
import Title from "./Components/Title";

describe("<Footer />", () => {
  it("renders", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find(Specialists)).toHaveLength(1);
    expect(wrapper.find(Contact)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(3);
  });
});
