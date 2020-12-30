import React from 'react';
import { shallow } from 'enzyme';
import UserCentre from './UserCentre';
import Content from "./components/Content";

describe('<UserCentre />', () => {
    it('renders', () => {
        const wrapper = shallow(<UserCentre />);

        expect(wrapper.find(Content)).toHaveLength(1);
    });
});