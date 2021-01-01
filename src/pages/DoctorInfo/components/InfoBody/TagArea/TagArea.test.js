import React from "react";
import { shallow } from "enzyme";
import TagArea from "./index";
import Tag from "./Tag";

const title = "title";
const items = ["item-one", "item-two"];
const color = "white";

describe("<TagArea />", () => {
  it("renders", () => {
    const wrapper = shallow(
      <TagArea title={title} items={items} color={color} />
    );

    expect(wrapper.children().at(0).text()).toEqual("title");
    expect(wrapper.find(Tag)).toHaveLength(2);
  });
});
