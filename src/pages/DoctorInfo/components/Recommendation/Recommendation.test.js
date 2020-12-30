import React from 'react';
import { shallow } from 'enzyme';
import Recommendation from './index';
import DoctorCard from "./DoctorCard";

const doctorList = [
    {
        id: "test",
        firstName: "test",
        lastName: "test",
        gender: "test"
    },
    {
        id: "test",
        firstName: "test",
        lastName: "test",
        gender: "test"
    }
]

describe('<Recommendation />', () => {
    it('renders if doctorList is empty', () => {
        const wrapper = shallow(<Recommendation />);
        wrapper.setState({
            doctorList: []
        })

        expect(wrapper.find(DoctorCard)).toHaveLength(0);
    });

    it('renders if doctorList is not empty', () => {
        const wrapper = shallow(<Recommendation />);
        wrapper.setState({
            doctorList: doctorList
        })

        expect(wrapper.find(DoctorCard)).toHaveLength(2);
    });
});
