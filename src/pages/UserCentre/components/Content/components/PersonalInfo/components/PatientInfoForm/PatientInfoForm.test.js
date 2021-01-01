import React from "react";
import { shallow } from "enzyme";
import PatientInfoForm from "./PatientInfoForm";
import {
  Layout,
  FormItem,
  Label,
  FormInput,
  GenderSelector,
  Title,
  Submit,
} from "../../../formStyle";

describe("<PatientInfoForm />", () => {
  it("renders", () => {
    const wrapper = shallow(<PatientInfoForm />);

    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(FormItem)).toHaveLength(5);
    expect(wrapper.find(Label)).toHaveLength(5);
    expect(wrapper.find(FormInput)).toHaveLength(4);
    expect(wrapper.find(GenderSelector)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Submit)).toHaveLength(1);
  });
});
