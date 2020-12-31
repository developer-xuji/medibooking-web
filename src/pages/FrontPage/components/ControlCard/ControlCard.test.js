import React from 'react';
import { shallow } from 'enzyme';
import ControlCard from './ControlCard';
import Button from "../../../../components/Button";
import CardIcon from "../CardIcon";

describe('<ControlCard />', () => {
    it('renders', () => {
        const wrapper = shallow(<ControlCard />);

        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(CardIcon)).toHaveLength(1);
    });
});