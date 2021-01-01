import React from "react";
import { shallow } from "enzyme";
import LoadingSpin from "./LoadingSpin";
import { Spin } from "antd";

describe("<LoadingSpin />", () => {
  it("renders", () => {
    const wrapper = shallow(<LoadingSpin />);

    expect(wrapper.find(Spin)).toHaveLength(1);
  });
});
