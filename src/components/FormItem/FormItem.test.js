import React from "react";
import { shallow } from "enzyme";
import FormItem from "./FormItem";

describe("<FormItem />", () => {
  it("renders if there is no error", () => {
    const wrapper = shallow(
      <FormItem children={<div>Test</div>} error={null} />
    );
    expect(wrapper.children()).toHaveLength(1);
  });

  it("renders if there is an error", () => {
    const wrapper = shallow(
      <FormItem children={<div>Test</div>} error="Error Message" />
    );
    expect(wrapper.children()).toHaveLength(2);
    expect(wrapper.children().at(1).text()).toEqual("Error Message");
  });
});
