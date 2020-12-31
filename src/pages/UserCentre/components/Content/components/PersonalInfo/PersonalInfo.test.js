import React from 'react';
import { shallow } from 'enzyme';
import PersonalInfo from './PersonalInfo';
import LoadingSpin from "../../../../../../components/LoadingSpin";
import PatientInfoForm from "./components/PatientInfoForm";
import DoctorInfoForm from "./components/DoctorInfoForm";

describe('<PersonalInfo />', () => {
    it('renders if loading is true', () => {
        const wrapper = shallow(<PersonalInfo />);
        wrapper.setState({ loading: true});

        expect(wrapper.find(LoadingSpin)).toHaveLength(1);
        expect(wrapper.find(PatientInfoForm)).toHaveLength(0);
        expect(wrapper.find(DoctorInfoForm)).toHaveLength(0);
    });

    it('renders if loading is false and role is "ROLE_DOCTOR"', () => {
        const wrapper = shallow(<PersonalInfo />);
        wrapper.setState({ loading: false, role: "ROLE_DOCTOR"});

        expect(wrapper.find(LoadingSpin)).toHaveLength(0);
        expect(wrapper.find(PatientInfoForm)).toHaveLength(0);
        expect(wrapper.find(DoctorInfoForm)).toHaveLength(1);
    });

    it('renders if loading is false and role is "ROLE_PATIENT"', () => {
        const wrapper = shallow(<PersonalInfo />);
        wrapper.setState({ loading: false, role: "ROLE_PATIENT"});

        expect(wrapper.find(LoadingSpin)).toHaveLength(0);
        expect(wrapper.find(PatientInfoForm)).toHaveLength(1);
        expect(wrapper.find(DoctorInfoForm)).toHaveLength(0);
    });
});
