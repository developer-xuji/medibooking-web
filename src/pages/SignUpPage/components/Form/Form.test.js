import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import DividingLine from "./components/DividingLine";
import InputField from "./components/Input";
import SubmitButton from "./components/SubmitButton";
import Footer from "./components/Footer";

describe('<Form />', () => {
    it('renders', () => {
        const wrapper = shallow(<Form />);

        expect(wrapper.find(DividingLine)).toHaveLength(1);
        expect(wrapper.find(InputField)).toHaveLength(4);
        expect(wrapper.find(SubmitButton)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });
});
