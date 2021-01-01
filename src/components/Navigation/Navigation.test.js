import React from "react";
import { shallow } from "enzyme";
import Container from "../Container";
import Navigation from "./Navigation";
import WithAuthenticationModalsAuthentication from "./components/Authentication";

describe("<Navigation />", () => {
  it("renders", () => {
    const wrapper = shallow(<Navigation />);

    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find(WithAuthenticationModalsAuthentication)).toHaveLength(
      1
    );
  });
});
