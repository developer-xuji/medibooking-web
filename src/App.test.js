import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

describe("<App />", () => {
  it("renders", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Router)).toHaveLength(1);
    expect(wrapper.find(Route)).toHaveLength(9);
    expect(wrapper.find(Navigation)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
