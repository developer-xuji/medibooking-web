import React from 'react';
import { shallow } from 'enzyme';
import CustomerResponse from './index';
import TitleArea from "../TitleArea"
import ResponseCard from "./ResponseCard"

describe('<CustomerResponse />', () => {
    it('renders', () => {
        const wrapper = shallow(<CustomerResponse />);

        expect(wrapper.find(TitleArea)).toHaveLength(1);
        expect(wrapper.find(ResponseCard)).toHaveLength(2);
    });
});