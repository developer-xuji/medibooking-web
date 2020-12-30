import React from 'react';
import { shallow } from 'enzyme';
import DoctorInfoForm from './DoctorInfoForm';
import {
    Layout,
    FormItem,
    Label,
    FormInput,
    DoctorDescription,
    GenderSelector,
    Title,
    Submit,
  } from "../../../formStyle";
  import MultiSelector from "./components/MultiSelector";

  describe('<DoctorInfoForm />', () => {
    it('renders', () => {
        const wrapper = shallow(<DoctorInfoForm />);

        expect(wrapper.find(Layout)).toHaveLength(1);
        expect(wrapper.find(FormItem)).toHaveLength(7);
        expect(wrapper.find(Label)).toHaveLength(7);
        expect(wrapper.find(FormInput)).toHaveLength(3);
        expect(wrapper.find(DoctorDescription)).toHaveLength(1);
        expect(wrapper.find(GenderSelector)).toHaveLength(1);
        expect(wrapper.find(Title)).toHaveLength(1);
        expect(wrapper.find(Submit)).toHaveLength(1);
        expect(wrapper.find(MultiSelector)).toHaveLength(2);
    });
});