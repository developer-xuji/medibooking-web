import React from 'react';
import { shallow } from 'enzyme';
import DoctorLogin from './DoctorLogin';
import DoctorLoginForm from "./components/DoctorLoginForm";
import SplashPane from "./components/SplashPane";

describe('<DoctorLogin />', () => {
    it('renders', () => {
        const wrapper = shallow(<DoctorLogin />);

        expect(wrapper.find(DoctorLoginForm)).toHaveLength(1);
        expect(wrapper.find(SplashPane)).toHaveLength(1);
    })
});