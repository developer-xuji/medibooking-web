import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from './Menu';
import { Link } from "react-router-dom";

describe('<Menu />', () => {
    it('renders', () => {
        const wrapper = shallow(<Menu />);

        expect(wrapper.find(Link)).toHaveLength(3);
    });
});
