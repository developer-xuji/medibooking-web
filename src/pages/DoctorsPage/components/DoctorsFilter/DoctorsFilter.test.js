import React from 'react';
import { shallow } from 'enzyme';
import DoctorsFilter from './DoctorsFilter';
import { Select } from 'antd';

describe('<DoctorsFilter />', () => {
    it('renders', () => {
        const wrapper = shallow(<DoctorsFilter />);

        expect(wrapper.find(Select)).toHaveLength(2);
    });
});
